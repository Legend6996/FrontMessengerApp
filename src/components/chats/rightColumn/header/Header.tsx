import Button from "@/components/ui/buttons/button/Button";
import { useActions } from "@/hooks/redux";
import { XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";

type Props = {};

const Header = (props: Props) => {
	const { setIsOpenRightColumn } = useActions();

	return (
		<div className="flex items-center gap-5 px-2 py-1">
			<Button
				icon={XMarkIcon}
				onClick={() => setIsOpenRightColumn(false)}
				iconClassName="!size-8"
				className="rounded-main p-2 lg:hover:bg-gray-200"
			/>
			<h1 className="text-xl font-semibold">Инфо</h1>
		</div>
	);
};

export default Header;
