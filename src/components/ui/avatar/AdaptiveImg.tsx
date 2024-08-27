import Image from "next/image";
import React from "react";

export interface IAdaptiveImg {
	imgClass?: string;
	wrapClass?: string;
	imgPath?: string;
	name: string;
};

const AdaptiveImg = ({imgClass, wrapClass, imgPath, name}: IAdaptiveImg) => {
	return (
		<div className={`relative w-full pt-[100%] ${wrapClass}`}>
			<Image
				alt={name}
				src={imgPath || ""}
				fill
				className={`absolute left-0 top-0 h-full w-full object-cover ${imgClass}`}
			/>
		</div>
	);
};

export default AdaptiveImg;
