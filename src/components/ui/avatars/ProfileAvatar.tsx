import React from "react";
import AdaptiveImg, { IAdaptiveImg } from "../imgs/AdaptiveImg";
import Avatar from "./Avatar";

const ProfileAvatar = ({
	imgClass,
	wrapClass,
	imgPath,
	name,
}: IAdaptiveImg) => {
	return (
		<div className="relative">
			<div className="hidden md:block">
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
			</div>
			<div className="flex w-full flex-col items-center gap-5 pt-5 md:pt-0">
				<Avatar //for mobile
					imgPath={imgPath}
					name={name}
					className="size-28 min-h-28 min-w-28 text-3xl md:hidden"
				/>
				<div className="w-full px-4 py-2 text-center md:absolute md:bottom-0 md:left-0 md:rounded-b-main md:bg-black/15 md:text-start md:text-white">
					<h2 className="truncate text-xl font-medium !leading-none">{name}</h2>
					<span className="text-sm text-gray-500 md:text-white">online</span>
				</div>
			</div>
		</div>
	);
};

export default ProfileAvatar;
