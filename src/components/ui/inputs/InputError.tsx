import React from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
	text?: string;
};

const InputError = ({ text }: Props) => {
  
	return (
		<>
			<AnimatePresence initial={false}>
				{text && (
					<motion.div
            key={text}
            layout
						initial="hide"
						animate="show"
						exit="hide"
						variants={{
							show: { opacity: 1, height: "auto" },
							hide: { opacity: 0, height: 0 },
						}}
						transition={{ duration: 0.3 }}
						className="text-sm font-semibold text-red-500"
					>
						<div className="pt-2">{text}</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default InputError;
