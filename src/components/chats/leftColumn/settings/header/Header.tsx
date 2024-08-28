import React from "react";
import Button from "@/components/ui/buttons/button/Button";
import {
	ArrowLeftIcon,
	ArrowRightStartOnRectangleIcon,
	PencilIcon,
} from "@heroicons/react/24/outline";
import { useActions } from "@/hooks/redux";

type Props = {};

const Header = (props: Props) => {
	const { setLeftColumnState } = useActions();

	return (
		<>
			<div className="flex items-center justify-between gap-1 px-2 py-2">
				<div className="flex items-center">
					<Button
						icon={ArrowLeftIcon}
						onClick={() => setLeftColumnState("chats")}
						iconClassName="size-6"
						className="mr-2 rounded-main p-2 lg:hover:bg-gray-200"
					/>
					<h1 className="text-xl font-medium">Настройки</h1>
				</div>
				<div className="flex gap-2">
					<Button
						icon={PencilIcon}
						onClick={() => setLeftColumnState("profileEdit")}
						iconClassName="size-6"
						className="rounded-main p-2 lg:hover:bg-gray-200"
					/>
					<Button
						icon={ArrowRightStartOnRectangleIcon}
						iconClassName="size-6"
						className="rounded-main p-2 lg:hover:bg-gray-200"
					/>
				</div>
			</div>
		</>
	);
};

export default Header;
