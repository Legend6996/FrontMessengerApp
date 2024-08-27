import Button from "@/components/ui/buttons/button/Button";
import Dropdown from "@/components/ui/dropdown/Dropdown";
import AutoTextArea from "@/components/ui/inputs/autoTextArea/AutoTextArea";
import {
	Bars3BottomLeftIcon,
	PaperAirplaneIcon,
	PaperClipIcon,
} from "@heroicons/react/24/outline";
import React from "react";

type Props = {};

const EnterPanel = (props: Props) => {
	const items = Array(7)
		.fill(null)
		.map((_, index) => ({
			text: `${index + 1} Item`,
			icon: Bars3BottomLeftIcon,
			onClick: () => console.log(index),
		}));

	return (
		<>
			<form>
				<div className="flex items-end gap-2">
					<div className="flex w-full items-center gap-2 rounded-main bg-body pl-2 pr-5 md:gap-5">
						<Dropdown
							items={items}
              direction="top left"
							btnIcon={PaperClipIcon}
							iconClassName="size-5 md:size-7 text-gray-700"
							btnClassName="rounded-main p-2 lg:hover:bg-gray-200"
						/>
						<AutoTextArea
							className="py-3 md:py-4"
							placeholder="Сообщение"
						/>
					</div>
					<Button
						icon={PaperAirplaneIcon}
						iconClassName=" size-5 md:size-6"
						className="rounded-full bg-body p-3 md:p-4 lg:hover:bg-primary lg:hover:text-white"
					/>
				</div>
			</form>
		</>
	);
};

export default EnterPanel;
