import ProfileAvatar from "@/components/ui/avatar/ProfileAvatar";
import React from "react";

type Props = {};

const ProfileImage = (props: Props) => {
	return (
		<>
			<div className="relative">
				<ProfileAvatar
					name="Bob"
					imgClass="rounded-main"
					wrapClass="rounded-main !pt-[95%]"
					imgPath="https://avatars.mds.yandex.net/i?id=4f7586d49edaa427e07a8819562fc284_l-5248434-images-thumbs&n=13"
				/>
				<div className="absolute bottom-0 left-0 w-full rounded-b-main bg-black/15 px-4 py-2 text-white">
					<h2 className="truncate text-xl">Bob</h2>
					<span>online</span>
				</div>
			</div>
		</>
	);
};

export default ProfileImage;
