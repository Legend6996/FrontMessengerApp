"use client";
import Login from "@/components/auth/Login";
import Register from "@/components/auth/Register";
import Switch from "@/components/auth/Switch";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { NextPage } from "next";
import React, { useState } from "react";

type Props = {};

const AuthPage: NextPage = (props: Props) => {
	const [isLogin, setIsLogin] = useState<boolean>(true);

	return (
		<>
			<div className="flex min-h-screen items-center justify-center">
				<div className="mx-10 w-80">
					<LayoutGroup>
						<motion.div
							layout
							transition={{ duration: 0.2 }}
							className="text-center"
						>
							<h1 className="main-gradient text-gradient text-3xl font-bold">
								Messenger App
							</h1>
							<Switch
							isLogin={isLogin}
							setIsLogin={setIsLogin}
						/>
						</motion.div>
						<AnimatePresence
              initial={false}
              mode="wait"
            >
              {isLogin ? (
                <motion.div
                  key={"login"}
                  layout
                  initial="hide"
                  animate="show"
                  exit="hide"
                  variants={{
                    show: { opacity: 1, x: "0%" },
                    hide: { opacity: 0, x: "-50%" },
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <Login />
                </motion.div>
              ) : (
                <motion.div
                  key={"register"}
                  layout
                  initial="hide"
                  animate="show"
                  exit="hide"
                  variants={{
                    show: { opacity: 1, x: "0%" },
                    hide: { opacity: 0, x: "50%" },
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <Register />
                </motion.div>
              )}
            </AnimatePresence>
					</LayoutGroup>
				</div>
			</div>
		</>
	);
};

export default AuthPage;
