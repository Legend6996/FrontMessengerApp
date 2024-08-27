import React from "react";
import { useAppSelector } from "@/hooks/redux";
import styles from "./styles.module.css";
import Header from "./header/Header";
import SharedContent from "./sharedContent/SharedContent";
import ProfileInfo from "../profileInfo/ProfileInfo";

type Props = {};

const RightColumn = (props: Props) => {
	const { isOpenRightColumn } = useAppSelector((state) => state.columns);

	return (
		<>
			<div
				className={`${styles.rightColumn} ${isOpenRightColumn ? "translate-x-0" : styles.hide}`}
			>
				<Header />
				<div className="flex flex-col overflow-y-scroll">
					<ProfileInfo
						name="Bob"
						login="Booob"
						imgPath="https://avatars.mds.yandex.net/i?id=4f7586d49edaa427e07a8819562fc284_l-5248434-images-thumbs&n=13"
					/>
					<SharedContent />
				</div>
			</div>
		</>
	);
};

export default RightColumn;
