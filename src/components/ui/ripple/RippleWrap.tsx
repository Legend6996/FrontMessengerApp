import React, { useEffect, useRef, useState } from "react";
import Ripple from "./Ripple";

type Position = {
	x: number;
	y: number;
	key: number;
};

type Props = {
	className?: string;
	children: React.ReactNode;
};

const RippleWrap = ({ className, children }: Props) => {
	const [positions, setPositions] = useState<Position[]>([]);
	const tileRef = useRef<HTMLDivElement>(null);
	const [tileSize, setTileSize] = useState({ width: 0, height: 0 });

	useEffect(() => {
		if (tileRef.current) {
			const rect = tileRef.current.getBoundingClientRect();
			setTileSize({ width: rect.width, height: rect.height });
		}
	}, []);

	const handleClick = (e: React.MouseEvent) => {
		const rect = e.currentTarget.getBoundingClientRect();
		const newPosition = {
			x: e.clientX - rect.left,
			y: e.clientY - rect.top,
			key: Date.now(),
		};
		setPositions((prevPositions) => [...prevPositions, newPosition]);
	};

	const handleAnimationComplete = (key: number) => {
		setPositions((prevPositions) =>
			prevPositions.filter((position) => position.key !== key),
		);
	};

	return (
		<div
			ref={tileRef}
			onClick={handleClick}
			className={`relative z-0 size-full overflow-hidden ${className}`}
		>
			{children}
			<Ripple
				positions={positions}
				tileSize={tileSize}
				onAnimationComplete={handleAnimationComplete}
			/>
		</div>
	);
};

export default RippleWrap;
