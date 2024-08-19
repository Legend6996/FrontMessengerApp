import classNames from "@/utils/ClassNames";
import Link from "next/link";
import type { FC } from "react";
import Spinner from "../../spinner/Spinner";
import styles from "./style.module.css";

type Props = {
	text: string;
	onClick?: () => void;
	className?: string;
	isLoading?: boolean;
	disabled?: boolean;
  size?: "sm" | "md" | "lg";
	href?: string;
	type?: "button" | "submit" | "reset";
};

const Button: FC<Props> = ({
	text,
	onClick,
	className,
	isLoading = false,
	disabled = false,
  size,
	href,
	type = "button",
}) => {
	const buttonClasses = classNames(
		styles.btn,
		{ [styles.btnSm]: size === "sm" }, 
		{ [styles.btnMd]: size === "md" }, 
		{ [styles.btnLg]: size === "lg" }, 
		className || "",
	);

	return (
		<>
			{href ? (
				<Link
					href={href}
					className={buttonClasses}
					onClick={onClick}
				>
					{text}
				</Link>
			) : (
				<button
					className={buttonClasses}
					onClick={onClick}
					disabled={disabled || isLoading}
					type={type}
				>
					{isLoading ? <Spinner className="size-6 fill-primary" /> : text}
				</button>
			)}
		</>
	);
};

export default Button;
