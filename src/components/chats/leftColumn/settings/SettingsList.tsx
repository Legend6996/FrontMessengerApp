import Tile from "@/components/ui/tiles/Tile";
import { BellIcon, Cog6ToothIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import React from "react";

type Props = {};

const SettingsList = (props: Props) => {
	return (
		<>
			<ul className="py-3 px-2 bg-body">
				<Tile className="gap-4 p-4">
					<Cog6ToothIcon className="size-6" />
					Основные настройки
				</Tile>
        <Tile className="gap-4 p-4">
					<BellIcon className="size-6" />
					Уведомления
				</Tile>
        <Tile className="gap-4 p-4">
					<LockClosedIcon className="size-6" />
					Безопасность
				</Tile>
			</ul>
		</>
	);
};

export default SettingsList;
