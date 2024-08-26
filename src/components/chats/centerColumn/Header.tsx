import React from "react";
import Avatar from "../../ui/avatar/Avatar";
import Button from "@/components/ui/buttons/button/Button";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useAppSelector, useActions } from "@/hooks/redux";

type Props = {
	name: string;
	img?: string;
	status: string;
};

const Header = ({ name, img, status }: Props) => {
	const {
		toggleLeftColumn,
		toggleRightColumn,
		setIsOpenLeftColumn,
		setIsOpenRightColumn,
	} = useActions();

	return (
		<>
			<div
				onClick={() => {
					toggleRightColumn();
					setIsOpenLeftColumn(false);
				}}
				className="z-10 w-full cursor-pointer bg-body shadow-bottom dark:bg-bodyDark"
			>
				<div className="flex items-center gap-3 px-3 py-2 md:px-8">
					<Button
						onClick={(e) => {
							toggleLeftColumn();
							setIsOpenRightColumn(false);
							e.stopPropagation();
						}}
						className="lg:!hidden"
						icon={ArrowLeftIcon}
					/>
					<Avatar
						name={name}
						img={img}
						size="sm"
					/>
					<div className="flex flex-col justify-center">
						<div className="font-bold !leading-tight md:text-lg">{name}</div>
						<span className="text-sm">{status}</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
