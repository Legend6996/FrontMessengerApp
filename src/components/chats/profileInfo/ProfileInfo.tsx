import ProfileAvatar from "@/components/ui/avatars/ProfileAvatar";
import Tile from "@/components/ui/tiles/Tile";
import {
	AtSymbolIcon,
	EnvelopeIcon,
	PhoneIcon,
} from "@heroicons/react/24/outline";
import React from "react";

type Props = {
	name: string;
	login?: string;
	phone?: string;
	email?: string;
	imgPath?: string;
};

const ProfileInfo = ({ name, login, phone, email, imgPath }: Props) => {
	return (
		<div className="flex flex-col bg-body">
			<ProfileAvatar
				name={name}
				imgPath={imgPath}
			/>
			<ul className="px-2 py-3">
				{login && (
					<Tile className="flex gap-4 p-4">
						<AtSymbolIcon className="size-6" />
						{login}
					</Tile>
				)}
				{phone && (
					<Tile className="flex gap-4 p-4">
						<PhoneIcon className="size-6" />
						{phone}
					</Tile>
				)}
				{email && (
					<Tile className="flex gap-4 p-4">
						<EnvelopeIcon className="size-6" />
						{email}
					</Tile>
				)}
			</ul>
		</div>
	);
};

export default ProfileInfo;
