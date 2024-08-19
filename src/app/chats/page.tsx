import Chats from "@/components/chats/Chats";
import { NextPage } from "next";
import React from "react";

type Props = {};

const ChatsPage: NextPage = (props: Props) => {
	return (
		<>
			<Chats />
		</>
	);
};

export default ChatsPage;
