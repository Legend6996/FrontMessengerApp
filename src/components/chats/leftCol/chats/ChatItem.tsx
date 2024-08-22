import React from "react";
import Avatar from "../../../ui/avatar/Avatar";

type Props = {
	isActive: boolean;
};

const ChatItem = ({ isActive }: Props) => {
	return (
		<>
			<li
				className={`flex cursor-pointer duration-200 items-center gap-2 rounded-main p-3 ${isActive ? "bg-primary" : "lg:hover:bg-gray-100"}`}
			>
				<Avatar
					name="Cesar"
					size="lg"
				/>
				<div className={`overflow-hidden ${isActive ? "text-white" : ""}`}>
					<h2 className="font-bold">Cesar</h2>
					<p className="truncate">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
						eveniet id maiores repellendus rerum a odit dolorum, asperiores
						expedita, amet laborum obcaecati aperiam! Eaque, ipsam praesentium.
						A molestias enim et!
					</p>
				</div>
			</li>
		</>
	);
};

export default ChatItem;
