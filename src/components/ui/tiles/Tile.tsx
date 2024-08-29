import React from "react";
import RippleWrap from "../ripple/RippleWrap";

type Props = {
	className?: string;
	isActive?: boolean;
	onClick?: () => void;
	children: React.ReactNode;
};

const Tile = ({ className, isActive = false, onClick, children }: Props) => {
	return (
		<li
			onClick={onClick}
			className={`cursor-pointer select-none rounded-main bg-body duration-200 ${isActive ? "bg-primary" : "lg:hover:bg-gray-100"}`}
		>
			<RippleWrap className={`${className} rounded-main`}>{children}</RippleWrap>
		</li>
	);
};

export default Tile;
