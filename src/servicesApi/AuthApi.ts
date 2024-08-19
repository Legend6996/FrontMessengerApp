import { ILogin, IRegister, ITokens } from "@/lib/models/Auth";
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./BaseApi";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQuery,
  endpoints: builder => ({
    login: builder.mutation<ITokens, ILogin>({
      query: loginData => ({
        url: "user/login",
        method: "POST",
        body: loginData
      })
    }),
    register: builder.mutation<ITokens, IRegister>({
      query: registerData => ({
        url: "user/register",
        method: "POST",
        body: registerData
      })
    })
  })
})