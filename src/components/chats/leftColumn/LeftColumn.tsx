import { AnimatePresence, motion, useAnimate } from "framer-motion";
import React, { useEffect } from "react";
import Chats from "./chats/Chats";
import { useAppSelector } from "@/hooks/redux";
import styles from "./style.module.css";
import Settings from "./settings/Settings";
import ProfileEdit from "./profileEdit/ProfileEdit";
import SlideWrap from "./SlideWrap";

type Props = {};

const LeftColumn = (props: Props) => {
	const { isOpenLeftColumn, leftColumnState } = useAppSelector(
		(state) => state.columns,
	);
  const [scope, animate] = useAnimate();

	const renderContent = () => {
		switch (leftColumnState) {
			case "profileEdit":
				return (
					<SlideWrap>
						<ProfileEdit />
					</SlideWrap>
				);
			default:
				return null;
		}
	};

	useEffect(() => {
		if (scope.current) {
			const scale = leftColumnState === "settings" || leftColumnState === "chats" ? 1 : 0.8;
			animate(scope.current, { scale }, { duration: 0.3 });
		}
	}, [leftColumnState]);

	return (
		<>
			<motion.div
				initial="show"
				animate={isOpenLeftColumn ? "show" : "hide"}
				variants={{
					show: { x: 0 },
					hide: { x: "-5rem" },
				}}
				transition={{ duration: 0.3 }}
				className={styles.leftColumn}
			>
				<div className="relative">
					<motion.div
						className="absolute inset-0 flex h-screen flex-col"
						animate={leftColumnState === "chats" ? { scale: 1 } : { scale: 0.8 }}
						transition={{ duration: 0.3 }}
					>
						<Chats />
					</motion.div>
					<AnimatePresence initial={false}>
						{(leftColumnState === "settings" || leftColumnState != "chats") && (
							<SlideWrap ref={scope}>
								<Settings />
							</SlideWrap>
						)}
					</AnimatePresence>
					<AnimatePresence initial={false}>{renderContent()}</AnimatePresence>
				</div>
			</motion.div>
		</>
	);
};

export default LeftColumn;