import classNames from "@/utils/ClassNames";
import Link from "next/link";
import type { FC } from "react";
import Spinner from "../../spinner/Spinner";
import styles from "./style.module.css";
import { motion } from "framer-motion";

type Props = {
	text?: string;
	onClick?: () => void;
	className?: string;
	isLoading?: boolean;
	disabled?: boolean;
	size?: "sm" | "md" | "lg";
	href?: string;
	type?: "button" | "submit" | "reset";
	icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	iconClassName?: string;
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
	icon: Icon,
	iconClassName,
}) => {
	const buttonClasses = classNames(
		styles.btn,
		{ [styles.btnSm]: size === "sm" },
		{ [styles.btnMd]: size === "md" },
		{ [styles.btnLg]: size === "lg" },
		className || "",
	);

	const renderContent = () => (
		<div className="flex items-center">
			{Icon && !isLoading && (
				<Icon className={`size-6 ${text ? "mr-2" : ""} ${iconClassName}`} />
			)}
			{isLoading ? <Spinner className="size-6 fill-primary" /> : text}
		</div>
	);

	return (
		<>
			{href ? (
				<Link
					href={href}
					className={buttonClasses}
					onClick={onClick}
				>
					{renderContent()}
				</Link>
			) : (
				<motion.button
					className={buttonClasses}
					onClick={onClick}
					disabled={disabled || isLoading}
					type={type}
					whileTap={{ scale: 0.8 }}
				>
					{renderContent()}
				</motion.button>
			)}
		</>
	);
};

export default Button;
