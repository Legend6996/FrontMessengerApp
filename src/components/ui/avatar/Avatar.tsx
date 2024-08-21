import ClassNames from "@/utils/ClassNames";
import Image from "next/image";
import React from "react";

type Props = {
	name: string;
	img?: string;
	size?: "lg" | "md" | "sm";
	className?: string;
};

const Avatar = ({ name, img, size, className }: Props) => {
	const avatarClasses = ClassNames(
		"rounded-full",
		{ "size-14 min-h-14 min-w-14": size === "lg" },
		{ "size-12 min-h-12 min-w-12": size === "md" },
		{ "size-10 min-h-10 min-w-10": size === "sm" },
		className || "",
	);

	if (img) {
		return (
			<div
				className={avatarClasses}
			>
				<Image src={img} alt={name} layout="fill" objectFit="cover" className={avatarClasses} />
			</div>
		);
	}

	if (name) {
		return (
			<div
				className={`flex items-center justify-center bg-primaryLight1 text-xl text-white ${avatarClasses}`}
			>
				{name[0].toUpperCase()}
			</div>
		);
	}
};

export default Avatar;
