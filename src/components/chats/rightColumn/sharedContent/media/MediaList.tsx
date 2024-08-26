import React from "react";
import MediaItem, { IMediaItem } from "./MediaItem";

type Props = {};

const MediaList = (props: Props) => {
	const mediaList: IMediaItem[] = [
		{
			id: 1,
			path: "https://avatars.mds.yandex.net/i?id=4f7586d49edaa427e07a8819562fc284_l-5248434-images-thumbs&n=13",
		},
		{
			id: 2,
			path: "https://avatars.mds.yandex.net/i?id=4f7586d49edaa427e07a8819562fc284_l-5248434-images-thumbs&n=13",
		},
		{
			id: 3,
			path: "https://avatars.mds.yandex.net/i?id=4f7586d49edaa427e07a8819562fc284_l-5248434-images-thumbs&n=13",
		},
		{
			id: 4,
			path: "https://avatars.mds.yandex.net/i?id=4f7586d49edaa427e07a8819562fc284_l-5248434-images-thumbs&n=13",
		},
		{
			id: 5,
			path: "https://avatars.mds.yandex.net/i?id=4f7586d49edaa427e07a8819562fc284_l-5248434-images-thumbs&n=13",
		},
	];

	return (
		<>
			<div className="grid w-full grid-cols-3 gap-[1px]">
				{mediaList.length ? (
					mediaList.map((item) => {
						return (
							<MediaItem
								key={item.id}
								id={item.id}
								path={item.path}
							/>
						);
					})
				) : (
					<div className="col-span-3 pt-20 text-gray-400 text-center">Нет медиа</div>
				)}
			</div>
		</>
	);
};

export default MediaList;
