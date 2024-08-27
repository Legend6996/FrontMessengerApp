import { motion } from "framer-motion";
import React from "react";
import ChatList from "./chats/ChatList";
import { useAppSelector } from "@/hooks/redux";
import styles from "./style.module.css";
import Settings from "./settings/Settings";

type Props = {};

const LeftColumn = (props: Props) => {
	const { isOpenLeftColumn, leftColumnState } = useAppSelector(
		(state) => state.columns,
	);

	const renderContent = () => {
		switch (leftColumnState) {
			case "chats":
				return <ChatList />;
			case "settings":
				return <Settings />;
			default:
				return null;
		}
	};

	return (
		<>
			<motion.div
				initial="show"
				animate={isOpenLeftColumn ? "show" : "hide"}
				variants={{
					show: { x: 0 },
					hide: { x: "-5rem" },
				}}
				transition={{ duration: 0.3 }}
				className={styles.leftColumn}
			>
				{renderContent()}
			</motion.div>
		</>
	);
};

export default LeftColumn;
