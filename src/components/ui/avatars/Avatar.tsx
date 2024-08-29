import ClassNames from "@/utils/ClassNames";
import React from "react";
import AdaptiveImg from "../imgs/AdaptiveImg";

type Props = {
	name: string;
	imgPath?: string;
	size?: "lg" | "md" | "sm" | "xs";
	className?: string;
};

const Avatar = ({ name, imgPath, size, className }: Props) => {
	const avatarClasses = ClassNames(
		"rounded-full overflow-hidden",
		{ "size-14 min-h-14 min-w-14 text-xl": size === "lg" },
		{ "size-12 min-h-12 min-w-12 text-xl": size === "md" },
		{ "size-10 min-h-10 min-w-10 text-xl": size === "sm" },
		{ "size-8 min-h-8 min-w-8 text-md": size === "xs" },
		className || "",
	);

	if (imgPath) {
		return (
			<div className={`${avatarClasses}`}>
				<AdaptiveImg
					name={name}
					imgPath={imgPath}
				/>
			</div>
		);
	}

	if (name) {
		return (
			<div
				className={`flex items-center justify-center bg-primaryLight1 text-white ${avatarClasses}`}
			>
				{name[0].toUpperCase()}
			</div>
		);
	}
};

export default Avatar;
