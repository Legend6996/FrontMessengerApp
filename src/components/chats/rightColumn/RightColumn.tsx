import React from "react";
import { useActions, useAppSelector } from "@/hooks/redux";
import styles from "./styles.module.css";

type Props = {};

const RightColumn = (props: Props) => {
	const { isOpenRightColumn } = useAppSelector((state) => state.columns);
	const { setIsOpenRightColumn } = useActions();

	return (
		<>
			<div
				className={`${styles.rightColumn} ${isOpenRightColumn ? "translate-x-0" : styles.hide}`}
			>
				<div className="flex flex-col gap-3 overflow-y-auto">
					<div
						onClick={() => setIsOpenRightColumn(false)}
						className="min-h-72 bg-blue-300"
					></div>
					<div className="bg-blue-200">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
						perspiciatis, molestiae dolorum veniam, cupiditate accusamus debitis
						voluptates ipsam repellat ullam dolorem. In dolorem nisi officia quo
						ea voluptate sunt sit.
					</div>
					<div className="bg-blue-200">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
						perspiciatis, molestiae dolorum veniam, cupiditate accusamus debitis
						voluptates ipsam repellat ullam dolorem. In dolorem nisi officia quo
						ea voluptate sunt sit.
					</div>
					<div className="bg-blue-200">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
						perspiciatis, molestiae dolorum veniam, cupiditate accusamus debitis
						voluptates ipsam repellat ullam dolorem. In dolorem nisi officia quo
						ea voluptate sunt sit.
					</div>
					<div className="bg-blue-200">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
						perspiciatis, molestiae dolorum veniam, cupiditate accusamus debitis
						voluptates ipsam repellat ullam dolorem. In dolorem nisi officia quo
						ea voluptate sunt sit.
					</div>
          <div className="bg-blue-200">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
						perspiciatis, molestiae dolorum veniam, cupiditate accusamus debitis
						voluptates ipsam repellat ullam dolorem. In dolorem nisi officia quo
						ea voluptate sunt sit.
					</div>
          <div className="bg-blue-200">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
						perspiciatis, molestiae dolorum veniam, cupiditate accusamus debitis
						voluptates ipsam repellat ullam dolorem. In dolorem nisi officia quo
						ea voluptate sunt sit.
					</div>
				</div>
			</div>
		</>
	);
};

export default RightColumn;
