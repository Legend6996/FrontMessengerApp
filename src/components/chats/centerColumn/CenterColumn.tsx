"use client";
import React, { Component, useEffect, useState } from "react";
import MessagesContainer from "./MessagesContainer";
import { useAppSelector } from "@/hooks/redux";
import Header from "./Header";
import styles from "./style.module.css";

type Props = {};

const CenterColumn = (props: Props) => {
	const { isOpenLeftColumn, isOpenRightColumn } = useAppSelector(
		(state) => state.columns,
	);
	return (
		<>
			<div
				className={`${styles.centerColumn} ${isOpenLeftColumn ? styles.slideLeft : "translate-x-0"} ${isOpenRightColumn ? "xl:pr-[25vw]" : ""}`}
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
