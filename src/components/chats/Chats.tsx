"use client";
import { userApi } from "@/servicesApi/UserApi";
import React, { useState } from "react";
import ChatList from "./leftCol/chats/ChatList";
import MainSearchHeader from "./leftCol/header/MainSearchHeader";
import Head from "./centerCol/Head";
import MessagesContainer from "./centerCol/MessagesContainer";

type Props = {};

const Chats = (props: Props) => {
	const { data: userInfo, isLoading } = userApi.useGetInfoQuery();

  const [isOpenChatsCol, setIsOpenChatsCol] = useState<boolean>(false);

	return (
		<>
			<div className="grid grid-cols-12 bg-body dark:bg-bodyDark">
				<div className="hidden hide-scrollbar h-screen flex-col border-r md:col-span-4 md:flex xl:col-span-3">
					<MainSearchHeader />
					<ChatList />
				</div>
				<div className="col-span-full bg-gray-100 flex h-dvh flex-col md:col-span-8 xl:col-span-9">
					<Head
						name="Bob"
						status="online"
            isOpenChatsCol={isOpenChatsCol}
            setIsOpenChatsCol={setIsOpenChatsCol}
					/>
					<MessagesContainer />
				</div>
			</div>
		</>
	);
};

export default Chats;
