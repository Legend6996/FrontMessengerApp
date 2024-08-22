import React, { useState, useEffect, FC } from "react";
import styles from "./style.module.css";
import SimpleInput, { InputProps } from "../SimpleInput";

const AnimInput = (props: InputProps) => {
	return (
		<>
			<div className="relative h-11 w-full">
				<SimpleInput
					{...props}
					className={styles.animInput}
					labelClassName={styles.animLabel}
					rest={{...props.rest, required: true}}
				/>
			</div>
		</>
	);
};

export default AnimInput;