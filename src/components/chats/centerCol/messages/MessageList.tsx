import React from "react";
import Message from "./message/Message";

type Props = {};

const MessageList = (props: Props) => {
	return (
		<>
			<div className="flex flex-col gap-3 pt-2">
				{Array(10)
					.fill(null)
					.map((item, index) => {
						return (
							<Message
								key={index}
								isCurUser={index % 2 === 0}
								content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eaque, dicta laboriosam explicabo consequatur repellendus minus illum quisquam totam doloribus hic ducimus dignissimos, incidunt voluptatibus ullam nihil dolor, dolorum maxime."
							/>
						);
					})}
			</div>
		</>
	);
};

export default MessageList;
