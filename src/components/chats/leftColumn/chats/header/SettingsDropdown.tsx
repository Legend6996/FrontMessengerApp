import Dropdown, { IDropdownItem } from "@/components/ui/dropdown/Dropdown";
import React from "react";
import { Bars3BottomLeftIcon, Cog6ToothIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import { useActions } from "@/hooks/redux";

type Props = {};

const SettingsDropdown = (props: Props) => {
  const { setLeftColumnState } = useActions();
	const items: IDropdownItem[] = [
    {
      text: "Настройки",
      icon: Cog6ToothIcon,
      onClick: () => setLeftColumnState("settings")
    },
  ];

	return (
		<>
			<Dropdown
				direction="bottom left"
				items={items}
				btnIcon={Bars3BottomLeftIcon}
				iconClassName="size-6 text-gray-700"
				btnClassName="mr-2 rounded-lg p-2 lg:hover:bg-gray-200"
			/>
		</>
	);
};

export default SettingsDropdown;
