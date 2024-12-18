import { APP_PAGES } from "@/constants/pages-url";
import {
	destroyRefreshToken,
	destroyToken,
	getRefreshToken,
	getToken,
	saveToken,
} from "@/utils/helpers/JwtHelper";
import { BaseQueryFn, FetchArgs, FetchBaseQueryMeta, fetchBaseQuery } from "@reduxjs/toolkit/query";

export interface CustomError {
	data: {
		text: string;
	};
	status: number;
}

interface RefreshTokenResponse {
	accessToken: string;
}

export const baseQuery = (basePath: string) =>
	fetchBaseQuery({
		baseUrl: `${process.env.NEXT_PUBLIC_API_URL}api/${basePath}`,
		credentials: "include",
		headers: {
			"Content-Type": "application/json",
		},
		prepareHeaders: (headers) => {
			const token = getToken();
			if (token) {
				headers.set("Authorization", `Bearer ${token}`);
			}
			return headers;
		},
	}) as BaseQueryFn<string | FetchArgs, unknown, CustomError, {}, FetchBaseQueryMeta>;

export const baseQueryWithReauth = (
	basePath: string,
): BaseQueryFn<string | FetchArgs, unknown, CustomError, {}, FetchBaseQueryMeta> => {
	const baseQueryWithPath = baseQuery(basePath);

	return async (args, api, extraOptions) => {
		let result = await baseQueryWithPath(args, api, extraOptions);

		if (result.error?.status === 401) {
			const refreshToken = getRefreshToken();
			const refreshResult = await baseQuery("auth")(
				{
					url: "/refresh",
					method: "POST",
					body: {
						refreshToken: refreshToken,
					},
				},
				api,
				extraOptions,
			);
			console.log("sending refresh token");

			if (refreshResult?.data) {
				const response = refreshResult.data as RefreshTokenResponse;

				saveToken(response.accessToken);
				result = await baseQueryWithPath(args, api, extraOptions);
			} else {
				destroyToken();
				destroyRefreshToken();
				if (typeof window !== "undefined") {
					window.location.href = APP_PAGES.AUTH;
				}
				console.log("Error refresh token");
			}
		}

		return result;
	};
};
