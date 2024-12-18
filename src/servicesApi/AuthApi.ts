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
		loginWithGoogle: builder.mutation<ITokens, string>({
			query: (googleCode) => ({
				url: "/login-with-google",
				method: "POST",
				body: JSON.stringify(googleCode),
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
