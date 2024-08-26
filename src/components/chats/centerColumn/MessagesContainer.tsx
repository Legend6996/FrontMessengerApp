import React from "react";
import MessageList from "./messages/MessageList";
import EnterPanel from "./enterPanel/EnterPanel";
import styles from "./style.module.css";

type Props = {};

const MessagesContainer = (props: Props) => {
	return (
		<>
			<div className="flex-grow overflow-y-scroll">
				<div className={`${styles.centeredContainer} `}>
					<MessageList />
				</div>
			</div>
			<div className={`${styles.centeredContainer} mt-2 mb-5`}>
				<EnterPanel />
			</div>
		</>
	);
};

export default MessagesContainer;
