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
			text: `${index + 1} afsdfa sdf af ds`,
			icon: Bars3BottomLeftIcon,
			onClick: () => console.log(index),
		}));

	return (
		<>
			<div className="flex items-center gap-1 px-2 py-3">
				{/* <Button
					icon={Bars3Icon}
					iconClassName="size-7 text-gray-700"
					className="mx-2 rounded-lg p-2 lg:hover:bg-gray-200"
				/> */}
				<Dropdown
					items={items}
					btnIcon={Bars3BottomLeftIcon}
          iconClassName="size-7 text-gray-700"
					btnClassName="mx-2 rounded-lg p-2 lg:hover:bg-gray-200"
				/>
				<AnimInput name="Поиск" />
			</div>
		</>
	);
};

export default MainSearchHeader;
