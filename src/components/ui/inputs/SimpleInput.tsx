import React, { useEffect, useState } from "react";

export type InputProps = {
	name: string;
	value?: string;
	setValue?: (value: string) => void;
	type?: "text" | "password" | "number";
	className?: string;
	isLabel?: boolean;
	labelClassName?: string;
	rest?: Record<string, any>;
};

const SimpleInput = ({
	type = "text",
	name,
	value,
	setValue,
	className,
	labelClassName,
	rest,
	isLabel = true,
}: InputProps) => {
	const [inputValue, setInputValue] = useState(value || "");

	useEffect(() => {
		setInputValue(value || "");
	}, [value]);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = event.target.value;
		setInputValue(newValue);
		if (setValue) {
			setValue(newValue);
		}
	};

	return (
		<>
			<input
				className={className}
				type={type}
				name={name}
				id={name}
				value={inputValue}
				{...rest}
				onChange={handleChange}
			/>
			{isLabel && (
				<label
					className={labelClassName}
					htmlFor={name}
				>
					{name}
				</label>
			)}
		</>
	);
};

export default SimpleInput;
