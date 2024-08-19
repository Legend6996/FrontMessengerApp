import React from "react";

type Props = {
	isLogin: boolean;
	setIsLogin: (value: boolean) => void;
};

const Switch = ({ isLogin, setIsLogin }: Props) => {
	return (
		<div className="my-8 flex gap-2 rounded-lg p-1">
			<button
				onClick={() => setIsLogin(true)}
				className={`w-full rounded-lg px-3 py-2 text-gray-400 ${isLogin && "bg-primary text-white"}`}
			>
				Вход
			</button>
			<button
				onClick={() => setIsLogin(false)}
				className={`w-full rounded-lg px-3 py-2 text-gray-400 ${!isLogin && "bg-primary text-white"}`}
			>
				Регистрация
			</button>
		</div>
	);
};

export default Switch;
