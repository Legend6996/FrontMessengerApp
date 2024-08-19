import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Button from "../ui/buttons/button/Button";
import AnimInput from "../ui/inputs/AnimInput/AnimInput";
import AnimPasswordInput from "../ui/inputs/password/AnimPasswordInput";
import { ILogin } from "@/lib/models/Auth";
import Spinner from "../ui/spinner/Spinner";

type Props = {};

const Login = (props: Props) => {
	const {
		handleSubmit,
		formState: { isSubmitting },
		control,
	} = useForm<ILogin>({
		mode: "onChange",
	});

	const onSubmit: SubmitHandler<ILogin> = async (data) => {
		console.log(data);
		await new Promise((resolve) => setTimeout(resolve, 1000));
	};

	return (
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
        isLoading={isSubmitting}
        size="md"
				className="text-primary hover:bg-primaryLight3"
			/>
		</form>
	);
};

export default Login;
