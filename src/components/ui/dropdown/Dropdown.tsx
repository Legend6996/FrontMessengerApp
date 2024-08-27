import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "../buttons/button/Button";
import classNames from "@/utils/ClassNames";

export interface IDropdownItem {
	text: string;
	icon: React.ComponentType<any>;
	onClick: () => void;
}

type Props = {
	btnClassName?: string;
	btnIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	iconClassName?: string;
	isHover?: boolean;
	items: Array<IDropdownItem>;
	direction: "top left" | "top right" | "bottom left" | "bottom right";
};

const Dropdown = ({
	btnClassName,
	btnIcon,
	iconClassName,
	isHover = false,
	items,
	direction,
}: Props) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const wrapperListClassNames = classNames("absolute z-10", {
		"pt-2 top-full left-0": direction === "bottom left",
		"pt-2 top-full right-0": direction === "bottom right",
		"pb-2 bottom-full left-0": direction === "top left",
		"pb-2 bottom-full right-0": direction === "top right",
	});

	const getTransformOrigin = () => {
		switch (direction) {
			case "top left":
				return "left bottom";
			case "top right":
				return "right bottom";
			case "bottom left":
				return "left top";
			case "bottom right":
				return "right top";
			default:
				return "center";
		}
	};

	useEffect(() => {
		const handleCloseDropdown = () => {
			if (isOpen) {
				setIsOpen(false);
			}
		};

		document.addEventListener("click", handleCloseDropdown);

		return () => {
			document.removeEventListener("click", handleCloseDropdown);
		};
	});

	const transformOrigin = getTransformOrigin();

	return (
		<motion.div
			onHoverEnd={() => isHover && setIsOpen(false)}
			className="relative w-fit"
		>
			<Button
				icon={btnIcon}
				onHoverStart={() => isHover && setIsOpen(true)}
				iconClassName={iconClassName}
				className={btnClassName}
				onClick={() => setIsOpen(!isOpen)}
			/>
			<AnimatePresence initial={false}>
				{isOpen && (
					<div className={wrapperListClassNames}>
						<motion.ul
							className="rounded-lg bg-body/80 px-1 py-2 shadow-dropdown backdrop-blur-md"
							initial={{ opacity: 0, scale: 0.4, transformOrigin }}
							animate={{ opacity: 1, scale: 1, transformOrigin }}
							exit={{ opacity: 0, scale: 0.4, transformOrigin }}
						>
							{items.map((item, index) => (
								<li key={index}>
									<Button
										text={item.text}
										icon={item.icon}
										iconClassName="mr-3"
										className="w-full !justify-start text-nowrap rounded-lg px-3 py-1 font-medium lg:hover:bg-gray-200/90"
										onClick={() => {
											item.onClick();
											setIsOpen(false);
										}}
									/>
								</li>
							))}
						</motion.ul>
					</div>
				)}
			</AnimatePresence>
		</motion.div>
	);
};

export default Dropdown;
