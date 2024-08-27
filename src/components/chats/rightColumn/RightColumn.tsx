import React from "react";
import { useAppSelector } from "@/hooks/redux";
import styles from "./styles.module.css";
import Header from "./header/Header";
import ProfileImage from "./profileImage/ProfileImage";
import { AtSymbolIcon, LinkIcon } from "@heroicons/react/24/outline";
import SharedContent from "./sharedContent/SharedContent";
import Tile from "@/components/ui/tiles/Tile";

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
					<ul className="px-2">
						<Tile className="p-4 gap-4">
							<AtSymbolIcon className="size-6" />
							Bob
						</Tile>
					</ul>
					<SharedContent />
				</div>
			</div>
		</>
	);
};

export default RightColumn;
