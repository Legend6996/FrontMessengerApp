import AdaptiveImg from "@/components/ui/imgs/AdaptiveImg";
import React from "react";

export interface IMediaItem {
	id: number;
	path: string;
}

const MediaItem = ({ id, path }: IMediaItem) => {
	return (
		<>
			<AdaptiveImg
				name="media"
				imgPath={path}
			/>
		</>
	);
};

export default MediaItem;
