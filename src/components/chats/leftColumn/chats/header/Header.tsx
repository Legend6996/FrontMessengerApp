import AnimInput from "@/components/ui/inputs/animInput/AnimInput";
import React from "react";
import SettingsDropdown from "./SettingsDropdown";

type Props = {};

const Header = (props: Props) => {

	return (
		<>
			<div className="flex items-center gap-1 px-3 py-3">
        <SettingsDropdown />
				<AnimInput name="Поиск" />
			</div>
		</>
	);
};

export default Header;
