import React from "react";
import ChatItem from "./ChatItem";
import Header from "./header/Header";

type Props = {};

const Chats = (props: Props) => {
	return (
		<>
      <Header />
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

export default Chats;
