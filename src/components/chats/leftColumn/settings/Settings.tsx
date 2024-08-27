import React from "react";
import Header from "./header/Header";
import ProfileInfo from "../../profileInfo/ProfileInfo";
import SettingsList from "./SettingsList";

type Props = {};

const Settings = (props: Props) => {
	return (
		<>
			<Header />
			<div className="flex flex-col gap-3 overflow-y-scroll bg-gray-100">
				<ProfileInfo
					name="Bob"
					login="Booob"
					phone="+ 943523452345"
					email="example@gmail.com"
				/>
				<SettingsList />
			</div>
		</>
	);
};

export default Settings;
