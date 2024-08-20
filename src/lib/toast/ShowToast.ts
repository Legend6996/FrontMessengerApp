import { toast } from "sonner";

type Props = {
	text: string;
	type?: "info" | "loading" | "error" | "warning";
	duration?: number;
	position?:
		| "top-left"
		| "top-center"
		| "top-right"
		| "bottom-left"
		| "bottom-center"
		| "bottom-right";
};

export const showToast = ({ text, type, duration = 3000, position = "top-right" }: Props) => {
	const options = { duration, position };

	switch (type) {
		case "info":
			toast.info(text, options);
			break;
		case "loading":
			toast.loading(text, options);
			break;
		case "error":
			toast.error(text, options);
			break;
		case "warning":
			toast.warning(text, options);
			break;
		default:
			toast(text, options);
	}
};
