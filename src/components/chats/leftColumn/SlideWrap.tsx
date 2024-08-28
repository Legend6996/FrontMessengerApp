import React, { forwardRef } from "react";
import { motion } from "framer-motion";

type Props = {
	children: React.ReactNode;
};

const SlideWrap = forwardRef<HTMLDivElement, Props>(({ children }, ref) => {
	return (
		<motion.div
			ref={ref}
			className="absolute inset-0 bg-body flex h-screen flex-col"
			initial={{ x: "100%" }}
			animate={{ x: 0 }}
			exit={{ x: "100%" }}
			transition={{ duration: 0.3 }}
		>
			{children}
		</motion.div>
	);
});

export default SlideWrap;
