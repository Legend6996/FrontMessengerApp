import React from "react";
import AdaptiveImg, { IAdaptiveImg } from "./AdaptiveImg";

const ProfileAvatar = ({
	imgClass,
	wrapClass,
	imgPath,
	name,
}: IAdaptiveImg) => {
	return (
		<div className="relative">
			{imgPath ? (
				<AdaptiveImg
					name={name}
					imgClass={`rounded-main ${imgClass}`}
					wrapClass={`rounded-main !pt-[95%] ${wrapClass}`}
					imgPath={imgPath}
				/>
			) : (
				<div
					className={`relative w-full rounded-main bg-primaryLight1 pt-[95%] text-white ${wrapClass}`}
				>
					<div className="absolute left-0 top-0 flex h-full w-full items-center justify-center text-4xl">
						{name[0].toUpperCase()}
					</div>
				</div>
			)}
			<div className="absolute bottom-0 left-0 w-full rounded-b-main bg-black/15 px-4 py-2 text-white">
				<h2 className="truncate text-xl">{name}</h2>
				<span>online</span>
			</div>
		</div>
	);
};

export default ProfileAvatar;
