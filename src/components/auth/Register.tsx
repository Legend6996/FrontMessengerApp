import { IRegister, ITokens, registerShchema } from "@/lib/models/Auth";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Button from "../ui/buttons/button/Button";
import AnimInput from "../ui/inputs/AnimInput/AnimInput";
import InputError from "../ui/inputs/InputError";
import AnimPasswordInput from "../ui/inputs/password/AnimPasswordInput";
import { authApi } from "@/servicesApi/AuthApi";
import { CustomError } from "@/servicesApi/BaseApi";
import { saveToken, saveRefreshToken } from "@/utils/helpers/JwtHelper";
import { APP_PAGES } from "@/constants/pages-url";
import { useRouter } from "next/navigation";
import { showToast } from "@/lib/toast/ShowToast";

type Props = {};

const Register = (props: Props) => {
	const [postRegister, { isLoading }] = authApi.useRegisterMutation();
	const router = useRouter();
	const {
		handleSubmit,
		formState: { errors },
		control,
	} = useForm<IRegister>({
		resolver: zodResolver(registerShchema),
		mode: "onChange",
	});

	const onSubmit: SubmitHandler<IRegister> = async (data) => {
		try {
			const tokens: ITokens = await postRegister(data).unwrap();
			saveToken(tokens.accessToken);
			saveRefreshToken(tokens.refreshToken);
			router.replace(APP_PAGES.HOME);
		} catch (err) {
			const error = err as CustomError;

			if (error.data?.text.toLowerCase().includes("email")) {
				showToast({
					text: "Пользователь с таким email уже существует.",
					type: "error",
				});
			} else if (error.data?.text.toLowerCase().includes("username")) {
				showToast({
					text: "Пользователь с таким логином уже существует.",
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
		<form
			className="flex flex-col gap-8"
			onSubmit={handleSubmit(onSubmit)}
			autoComplete="off"
		>
			<Controller
				name="name"
				control={control}
				render={({ field: { value, onChange } }) => (
					<div>
						<AnimInput
							name="Имя"
							value={value}
							setValue={onChange}
						/>
						<InputError text={errors.name?.message} />
					</div>
				)}
			/>
			<Controller
				name="userName"
				control={control}
				render={({ field: { value, onChange } }) => (
					<div>
						<AnimInput
							name="Логин"
							value={value}
							setValue={onChange}
						/>
						<InputError text={errors.userName?.message} />
					</div>
				)}
			/>
			<Controller
				name="email"
				control={control}
				render={({ field: { value, onChange } }) => (
					<div>
						<AnimInput
							name="Email"
							value={value}
							setValue={onChange}
						/>
						<InputError text={errors.email?.message} />
					</div>
				)}
			/>
			<Controller
				name="password"
				control={control}
				render={({ field: { value, onChange } }) => (
					<div>
						<AnimPasswordInput
							name="Пароль"
							type="password"
							value={value}
							setValue={onChange}
						/>
						<InputError text={errors.password?.message} />
					</div>
				)}
			/>
			<Controller
				name="confirmPassword"
				control={control}
				render={({ field: { value, onChange } }) => (
					<div>
						<AnimInput
							name="Повторите пароль"
							type="password"
							value={value}
							setValue={onChange}
						/>
						<InputError text={errors.confirmPassword?.message} />
					</div>
				)}
			/>
			<Button
				text="Зарегистрироваться"
				type="submit"
				isLoading={isLoading}
				size="md"
				className="text-primary hover:bg-primaryLight3"
			/>
		</form>
	);
};

export default Register;
