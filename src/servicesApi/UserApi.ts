import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "./BaseApi";
import { IUser } from "@/lib/models/User";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: baseQueryWithReauth,
  endpoints: builder => ({
    getInfo: builder.query<IUser, void>({
      query: () => "user/info",
    }),
  })
})