import z from "zod";

const passwordSchema = z
	.string()
	.refine((val) => /^[a-zA-Z0-9!@#$%^&*(),.?":{}|<>]+$/.test(val), {
		message: "Используйте латинские буквы",
	})
	.refine((val) => /[A-Z]/.test(val), {
		message: "Пароль должен содержать хотя бы одну заглавную букву",
	})
	.refine((val) => /[a-z]/.test(val), {
		message: "Пароль должен содержать хотя бы одну строчную букву",
	})
	.refine((val) => /[0-9]/.test(val), {
		message: "Пароль должен содержать хотя бы одну цифру",
	})
	.refine((val) => /[!@#$%^&*(),.?":{}|<>]/.test(val), {
		message: "Пароль должен содержать хотя бы один специальный символ",
	})
	.refine((val) => val.length >= 6, {
		message: "Используйте 6 или больше латинских букв, символов и цифр.",
	});

export const registerShchema = z
	.object({
		name: z.string().min(2, "Минимум 2 символа"),
		email: z.string().email("Введите корректный Email"),
		password: passwordSchema,
		confirmPassword: z.string(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Пароли не совпадают",
		path: ["confirmPassword"],
	});

export interface ILogin {
  email: string,
  password: string,
}

export type IRegister = z.infer<typeof registerShchema>;
