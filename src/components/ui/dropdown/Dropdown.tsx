import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "../buttons/button/Button";

export interface DropdownItem {
	text: string;
	icon: React.ComponentType<any>;
	onClick: () => void;
}

type Props = {
	btnClassName?: string;
	btnIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	iconClassName?: string;
	items: Array<DropdownItem>;
};

const Dropdown = ({ btnClassName, btnIcon, iconClassName, items }: Props) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<div className="relative w-fit">
			<Button
				icon={btnIcon}
				iconClassName={iconClassName}
				className={btnClassName}
				onClick={() => setIsOpen(!isOpen)}
			/>
			<AnimatePresence>
				{isOpen && (
					<div className="mt-2 absolute left-0 z-10">
						<motion.ul
							className="rounded-lg bg-body/80 p-2 shadow-lg backdrop-blur-md"
							initial={{ opacity: 0, y: -10 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -10 }}
						>
							{items.map((item, index) => (
								<li key={index}>
									<Button
										text={item.text}
										icon={item.icon}
										iconClassName="mr-3"
										className="text-nowrap rounded-lg px-2 py-2 font-semibold lg:hover:bg-gray-300"
										onClick={item.onClick}
									/>
								</li>
							))}
						</motion.ul>
					</div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default Dropdown;
