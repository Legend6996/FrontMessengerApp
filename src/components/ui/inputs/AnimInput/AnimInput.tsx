import React, { useState, useEffect, FC } from "react";
import styles from "./style.module.css";

export type InputProps = {
	name: string;
	value?: string;
	setValue?: (value: string) => void;
	type?: "text" | "password" | "number";
  // className?: string;
	rest?: Record<string, any>;
};

const AnimInput = ({ type = "text", ...props }: InputProps) => {
	const [inputValue, setInputValue] = useState(props.value || "");

	useEffect(() => {
		setInputValue(props.value || "");
	}, [props.value]);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = event.target.value;
		setInputValue(newValue);
		if (props.setValue) {
			props.setValue(newValue);
		}
	};

	return (
		<>
			<div className="relative h-11 w-full">
				<input
					className={styles.animInput}
					type={type}
					name={props.name}
					id={props.name}
					required
					value={inputValue}
					{...props.rest}
					onChange={handleChange}
				/>
				<label
					className={styles.animLabel}
					htmlFor={props.name}
				>
					{props.name}
				</label>
			</div>
		</>
	);
};

export default AnimInput;
