import React from "react";
import ChatItem from "./ChatItem";

type Props = {};

const ChatList = (props: Props) => {
	return (
		<>
			<ul className="overflow-y-scroll flex-grow p-2">
				<ChatItem isActive={true} />
				{Array(10)
					.fill(null)
					.map((_, index) => {
						return (
							<ChatItem
								key={index}
								isActive={false}
							/>
						);
					})}
			</ul>
		</>
	);
};

export default ChatList;
