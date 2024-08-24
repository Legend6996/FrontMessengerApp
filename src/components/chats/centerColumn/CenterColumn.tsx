"use client";
import React, { Component, useEffect, useState } from "react";
import MessagesContainer from "./MessagesContainer";
import { useAppSelector } from "@/hooks/redux";
import Header from "./Header";
import styles from "./style.module.css"

type Props = {};

const CenterColumn = (props: Props) => {
	const { isOpenLeftColumn } = useAppSelector((state) => state.columns);
	return (
		<>
			<div
				className={`${styles.centerColumn} ${!isOpenLeftColumn ? "translate-x-0" : styles.hideCenterColumn }`}
			>
				<Header
					name="Bob"
					status="online"
				/>
				<MessagesContainer />
			</div>
		</>
	);
};

export default CenterColumn;

