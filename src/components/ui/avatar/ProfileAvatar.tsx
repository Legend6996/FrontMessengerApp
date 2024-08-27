import React from "react";
import AdaptiveImg, { IAdaptiveImg } from "./AdaptiveImg";


const ProfileAvatar = ({ imgClass, wrapClass, imgPath, name }: IAdaptiveImg) => {
	if (imgPath) {
		return (
			<AdaptiveImg 
        imgClass={imgClass}
        wrapClass={wrapClass}
        imgPath={imgPath}
        name={name}
      />
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
