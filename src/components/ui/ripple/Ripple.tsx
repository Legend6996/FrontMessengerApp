import React from "react";
import { motion, AnimatePresence } from "framer-motion";

type Position = {
	x: number;
	y: number;
	key: number;
};

type RippleProps = {
	positions: Position[];
	tileSize: { width: number; height: number };
	onAnimationComplete: (key: number) => void;
};

const Ripple = ({ positions, tileSize, onAnimationComplete }: RippleProps) => {
	return (
		<AnimatePresence>
			{positions.map(({ x, y, key }) => (
				<motion.span
					key={key}
					initial={{ width: 0, height: 0, opacity: 1 }}
					animate={{ width: tileSize.width * 0.9, height: tileSize.width * 0.9 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.4, ease: "easeOut" }}
					onAnimationComplete={() => onAnimationComplete(key)}
					className="absolute rounded-full -translate-x-1/2 -translate-y-1/2 bg-gray-300/40 -z-10"
					style={{
						top: y,
						left: x,
					}}
				/>
			))}
		</AnimatePresence>
	);
};

export default Ripple;
