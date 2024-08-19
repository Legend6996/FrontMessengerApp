"use client"
import { userApi } from "@/servicesApi/UserApi";
import React from "react";

type Props = {};

const Chats = (props: Props) => {
	const { data: userInfo, isLoading } = userApi.useGetInfoQuery();

	return (
		<>
			<div>{userInfo?.email}  -email</div>
		</>
	);
};

export default Chats;
