import React from "react";
import Avatar from "../../../ui/avatar/Avatar";
import { useActions } from "@/hooks/redux";
import Tile from "@/components/ui/tiles/Tile";

type Props = {
	isActive: boolean;
};

const ChatItem = ({ isActive }: Props) => {
	const { setIsOpenLeftColumn } = useActions();
	return (
		<>
			<Tile
				className="items-center gap-2 p-2"
				isActive={isActive}
        onClick={() => setIsOpenLeftColumn(false)}
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
			</Tile>
		</>
	);
};

export default ChatItem;
