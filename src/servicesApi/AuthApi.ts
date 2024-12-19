import { ILogin, IRegister, ITokens } from "@/lib/models/Auth";
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./BaseApi";

export const authApi = createApi({
	reducerPath: "authApi",
	baseQuery: baseQuery("auth"),
	endpoints: (builder) => ({
		login: builder.mutation<ITokens, ILogin>({
			query: (loginData) => ({
				url: "/login",
				method: "POST",
				body: loginData,
			}),
		}),
		loginWithOAuth: builder.mutation<ITokens, { provider: string; code: string }>({
			query: ({ provider, code }) => ({
				url: `/login-with/${provider}`,
				method: "POST",
				body: JSON.stringify(code),
			}),
		}),
		register: builder.mutation<ITokens, IRegister>({
			query: (registerData) => ({
				url: "/register",
				method: "POST",
				body: registerData,
			}),
		}),
	}),
});
