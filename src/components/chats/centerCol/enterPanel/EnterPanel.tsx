import Button from "@/components/ui/buttons/button/Button";
import {
	ArrowTopRightOnSquareIcon,
	ArrowUpIcon,
	EyeIcon,
} from "@heroicons/react/24/outline";
import React from "react";

type Props = {};

const EnterPanel = (props: Props) => {
	return (
		<>
			<form>
				<div className="flex gap-2">
					<div className="rounded-main w-full bg-body px-2 py-4">fsadfsa</div>
					<Button
						icon={ArrowUpIcon}
						className="rounded-full bg-body px-4 hover:bg-primary hover:text-white"
					/>
				</div>
			</form>
		</>
	);
};

export default EnterPanel;
