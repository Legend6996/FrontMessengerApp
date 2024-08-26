import React from "react";
import { useActions, useAppSelector } from "@/hooks/redux";
import styles from "./styles.module.css";
import Header from "./header/Header";
import ProfileImage from "./profileImage/ProfileImage";
import { AtSymbolIcon, LinkIcon } from "@heroicons/react/24/outline";
import Button from "@/components/ui/buttons/button/Button";
import SharedContent from "./sharedContent/SharedContent";

type Props = {};

const RightColumn = (props: Props) => {
	const { isOpenRightColumn } = useAppSelector((state) => state.columns);

	return (
		<>
			<div
				className={`${styles.rightColumn} ${isOpenRightColumn ? "translate-x-0" : styles.hide}`}
			>
				<Header />
				<div className="flex flex-col gap-3 overflow-y-scroll">
					<ProfileImage />
					<div className="flex cursor-pointer gap-4 rounded-main p-4 duration-200 lg:hover:bg-gray-200">
						<AtSymbolIcon className="size-6" />
						Bob
					</div>
          <SharedContent />
				</div>
			</div>
		</>
	);
};

export default RightColumn;
