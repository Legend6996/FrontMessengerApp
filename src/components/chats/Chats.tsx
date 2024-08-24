"use client";
import { userApi } from "@/servicesApi/UserApi";
import React, { useCallback, useEffect, useState } from "react";
import LeftColumn from "./leftColumn/LeftColumn";
import CenterColumn from "./centerColumn/CenterColumn";

type Props = {};

const Chats = (props: Props) => {
	const { data: userInfo, isLoading } = userApi.useGetInfoQuery();

	return (
		<>
			<div className="flex w-screen bg-body dark:bg-bodyDark">
				<LeftColumn />
        <CenterColumn />
			</div>
		</>
	);
};

export default Chats;
