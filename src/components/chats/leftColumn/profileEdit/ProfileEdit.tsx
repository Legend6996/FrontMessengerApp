import { useActions } from "@/hooks/redux";
import React from "react";

type Props = {};

const ProfileEdit = (props: Props) => {
	const { setLeftColumnState } = useActions();

	return (
		<div
			onClick={() => setLeftColumnState("settings")}
		>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat illum
			expedita, possimus exercitationem consequuntur sequi cupiditate facilis
			error accusamus ratione ut iure minus obcaecati fuga aliquid officia, quos
			ad dicta.
		</div>
	);
};

export default ProfileEdit;
