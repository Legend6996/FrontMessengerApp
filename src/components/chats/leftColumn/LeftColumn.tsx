import { motion } from "framer-motion";
import React from "react";
import ChatList from "./chats/ChatList";
import MainSearchHeader from "./header/MainSearchHeader";
import { useAppSelector } from "@/hooks/redux";
import styles from "./style.module.css";

type Props = {};

const LeftColumn = (props: Props) => {
	const { isOpenLeftColumn } = useAppSelector((state) => state.columns);

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
				<MainSearchHeader />
				<ChatList />
			</motion.div>
		</>
	);
};

export default LeftColumn;
