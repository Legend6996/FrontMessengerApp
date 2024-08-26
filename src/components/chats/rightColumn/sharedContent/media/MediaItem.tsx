import Image from "next/image";
import React from "react";

export interface IMediaItem {
  id: number;
  path: string;
}

const MediaItem = ({ id, path }: IMediaItem) => {
	return (
		<>
			<div className={`relative w-full pt-[100%]`}>
				<Image
					alt="media"
					src={path}
					fill
					className={`absolute left-0 top-0 h-full w-full object-cover`}
				/>
			</div>
		</>
	);
};

export default MediaItem;
