import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Button from "../ui/buttons/button/Button";
import AnimInput from "../ui/inputs/animInput/AnimInput";
import AnimPasswordInput from "../ui/inputs/password/AnimPasswordInput";
import { ILogin, ITokens } from "@/lib/models/Auth";
import { authApi } from "@/servicesApi/AuthApi";
import { CustomError } from "@/servicesApi/BaseApi";
import { saveRefreshToken, saveToken } from "@/utils/helpers/JwtHelper";
import { useRouter } from "next/navigation";
import { APP_PAGES } from "@/constants/pages-url";
import { showToast } from "@/lib/toast/ShowToast";
import GoogleLogo from "@/assets/logos/GoogleLogo";
import YandexLogo from "@/assets/logos/YandexLogo";

type Props = {};

const Login = (props: Props) => {
	const [postLogin, { isLoading }] = authApi.useLoginMutation();
	const router = useRouter();
	const { handleSubmit, control } = useForm<ILogin>({
		mode: "onChange",
	});

	const onSubmit: SubmitHandler<ILogin> = async (data) => {
		try {
			const tokens: ITokens = await postLogin(data).unwrap();
			saveToken(tokens.accessToken);
			saveRefreshToken(tokens.refreshToken);
			router.replace(APP_PAGES.HOME);
		} catch (err) {
			const error = err as CustomError;

			if (error.data?.text.toLowerCase().includes("invalid")) {
				showToast({
					text: "Неверный логин или пароль.",
					type: "error",
				});
			} else {
				showToast({
					text: "Ошибка!",
					type: "error",
				});
			}
			console.log(err);
		}
	};

	return (
		<>
			<form
				className="flex flex-col gap-8"
				onSubmit={handleSubmit(onSubmit)}
			>
				<Controller
					name="email"
					control={control}
					render={({ field: { value, onChange } }) => (
						<AnimInput
							name="Email"
							value={value}
							setValue={onChange}
						/>
					)}
				/>
				<Controller
					name="password"
					control={control}
					render={({ field: { value, onChange } }) => (
						<AnimPasswordInput
							name="Пароль"
							type="password"
							value={value}
							setValue={onChange}
						/>
					)}
				/>
				<Button
					text="Войти"
					type="submit"
					isLoading={isLoading}
					size="md"
					className="rounded-lg border border-primaryLight2 text-primary lg:hover:bg-primaryLight3"
				/>
			</form>
			<div className="mt-6 flex flex-col gap-5">
				<Button
					icon={GoogleLogo}
					text="Вход через Google"
					onClick={() => router.push(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login/google`)}
					iconClassName="size-6"
					className="w-full rounded-lg border border-gray-200 p-2 text-gray-400 lg:hover:border-primaryLight3 lg:hover:bg-primaryLight3 lg:hover:text-primary"
				/>
				<Button
					icon={YandexLogo}
					text="Вход через Яндекс"
					onClick={() => router.push(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login/yandex`)}
					iconClassName="size-6"
					className="w-full rounded-lg border border-gray-200 p-2 text-gray-400 lg:hover:border-primaryLight3 lg:hover:bg-primaryLight3 lg:hover:text-primary"
				/>
			</div>
		</>
	);
};

export default Login;
