import Button from "@/components/ui/buttons/button/Button";
import AnimInput from "@/components/ui/inputs/AnimInput/AnimInput";
import { Bars3Icon } from "@heroicons/react/24/outline";
import React from "react";

type Props = {};

const MainSearchHeader = (props: Props) => {
	return (
		<>
			<div className="flex items-center gap-1 px-2 py-3">
				<Button
					icon={Bars3Icon}
					iconClassName="size-7 text-gray-700"
					className="rounded-lg p-2 hover:bg-gray-200 mx-2"
				/>
				<AnimInput name="Поиск" />
			</div>
		</>
	);
};

export default MainSearchHeader;
