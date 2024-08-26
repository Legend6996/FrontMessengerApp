import Image from "next/image";
import React from "react";

type Props = {
	imgClass?: string;
	wrapClass?: string;
	imgPath?: string;
	name: string;
};

const ProfileAvatar = ({ imgClass, wrapClass, imgPath, name }: Props) => {
	if (imgPath) {
		return (
			<div className={`relative w-full pt-[95%] ${wrapClass}`}>
				<Image
					alt={name}
					src={imgPath}
					fill
					className={`absolute left-0 top-0 h-full w-full object-cover ${imgClass}`}
				/>
			</div>
		);
	}

	if (name) {
		return (
			<div
				className={`relative w-full bg-primaryLight1 pt-[95%] text-white ${wrapClass}`}
			>
				<div className="absolute left-0 top-0 flex h-full w-full items-center justify-center text-4xl">
					{name[0].toUpperCase()}
				</div>
			</div>
		);
	}
};

export default ProfileAvatar;
