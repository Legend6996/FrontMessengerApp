import React, { useRef, useEffect, useState } from "react";
import styles from "./style.module.css"
import classNames from "@/utils/ClassNames";

type Props = {
  value?: string;
	setValue?: (value: string) => void;
  className?: string;
  placeholder?: string;
};

const AutoTextArea = ({value, setValue, className, placeholder}: Props) => {
	const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [textAreaValue, setTextAreaValue] = useState(value || "");
  const textAreaClasses = classNames(
    styles.textArea,
    className || "",
  );

	const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (textareaRef.current) {
			autoResize(textareaRef.current);
		}
		const newValue = event.target.value;
		setTextAreaValue(newValue);
		if (setValue) {
			setValue(newValue);
		}
	};

	const autoResize = (elem: HTMLTextAreaElement) => {
		elem.style.height = "auto";
		elem.style.height = `${elem.scrollHeight}px`;
	};

	useEffect(() => {
		setTextAreaValue(value || "");
		if (textareaRef.current) {
			autoResize(textareaRef.current);
		}
	}, [value]);

	return (
		<>
			<textarea
				ref={textareaRef}
        placeholder={placeholder}
				onChange={handleChange}
        value={textAreaValue}
				rows={1}
				className={textAreaClasses}
			/>
		</>
	);
};

export default AutoTextArea;
