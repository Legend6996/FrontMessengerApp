import React, { useState } from "react";
import AnimInput from "../animInput/AnimInput";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { InputProps } from "../SimpleInput";

const AnimPasswordInput = (props: InputProps) => {
	const [isShow, setIsShow] = useState(false);
	const inputProps: InputProps = {
		...props,
		type: isShow ? "text" : "password",
	};

	return (
		<div className="relative">
			<div
				onClick={() => setIsShow(!isShow)}
				className="absolute right-2 top-[0.7rem] z-10 cursor-pointer"
			>
				{isShow ? (
					<EyeIcon className="size-6 text-gray-400" />
				) : (
					<EyeSlashIcon className="size-6 text-gray-300" />
				)}
			</div>
			<AnimInput {...inputProps} />
		</div>
	);
};

export default AnimPasswordInput;
