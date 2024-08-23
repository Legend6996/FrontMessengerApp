import Button from "@/components/ui/buttons/button/Button";
import Dropdown from "@/components/ui/dropdown/Dropdown";
import AnimInput from "@/components/ui/inputs/animInput/AnimInput";
import { Bars3BottomLeftIcon, Bars3Icon } from "@heroicons/react/24/outline";
import React from "react";

type Props = {};

const MainSearchHeader = (props: Props) => {
	const items = Array(7)
		.fill(null)
		.map((_, index) => ({
			text: `${index + 1} Item`,
			icon: Bars3BottomLeftIcon,
			onClick: () => console.log(index),
		}));

	return (
		<>
			<div className="flex items-center gap-1 px-3 py-3">
				<Dropdown
					direction="bottom left"
					items={items}
					btnIcon={Bars3BottomLeftIcon}
					iconClassName="size-7 text-gray-700"
					btnClassName="mr-2 rounded-lg p-2 lg:hover:bg-gray-200"
				/>
				<AnimInput name="Поиск" />
			</div>
		</>
	);
};

export default MainSearchHeader;
