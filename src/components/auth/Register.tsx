import { IRegister, registerShchema } from '@/lib/models/Auth';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import Button from '../ui/buttons/button/Button';
import AnimInput from '../ui/inputs/AnimInput/AnimInput';
import InputError from '../ui/inputs/InputError';
import AnimPasswordInput from '../ui/inputs/password/AnimPasswordInput';

type Props = {}

const Register = (props: Props) => {
  const {
		handleSubmit,
		formState: { errors, isSubmitting },
		control,
	} = useForm<IRegister>({
		resolver: zodResolver(registerShchema),
		mode: "onChange",
	});

	const onSubmit: SubmitHandler<IRegister> = async (data) => {
		console.log(data);
		await new Promise((resolve) => setTimeout(resolve, 1000));
	};

	return (
		<form
			className="flex flex-col gap-8"
			onSubmit={handleSubmit(onSubmit)}
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
				name="email"
				control={control}
				render={({ field: { value, onChange } }) => (
					<div>
						<AnimInput
							name="Email"
							value={value}
							setValue={onChange}
              rest={{ autoComplete: "off" }}
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
              rest={{ autoComplete: "off" }}
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
        isLoading={isSubmitting}
        size="md"
				className="text-primary hover:bg-primaryLight3"
			/>
		</form>
	);
}

export default Register