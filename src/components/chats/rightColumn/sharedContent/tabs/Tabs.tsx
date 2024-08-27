import React from "react";
import { TabNames } from "../SharedContent";

interface Tabs {
	name: string;
	value: TabNames;
}

type Props = {
	curTab: string;
	setCurTab: (value: TabNames) => void;
};

const Tabs = ({ curTab, setCurTab }: Props) => {
	const tabs: Tabs[] = [
		{
			name: "Медиа",
			value: "media",
		},
		{
			name: "Аудио",
			value: "audio",
		},
	];

	return (
		<>
			<ul className="flex w-full justify-around border-b text-center">
				{tabs.map((item) => {
					return (
						<li
              key={item.value}
							onClick={() => setCurTab(item.value)}
							className={`cursor-pointer p-2 border-body border-b-[3px] ${curTab === item.value ? "!border-primary text-primary" : "text-gray-400"}`}
						>
							{item.name}
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default Tabs;
