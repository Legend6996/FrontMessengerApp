import { APP_PAGES } from "@/constants/pages-url";
import {
	destroyRefreshToken,
	destroyToken,
	getRefreshToken,
	getToken,
	saveToken,
} from "@/utils/helpers/JwtHelper";
import {
	BaseQueryFn,
	FetchArgs,
	FetchBaseQueryMeta,
	fetchBaseQuery,
} from "@reduxjs/toolkit/query";

export interface CustomError {
	data: {
		text: string;
	};
	status: number;
}

interface RefreshTokenResponse {
  accessToken: string;
}

export const baseQuery = fetchBaseQuery({
	baseUrl: `${process.env.NEXT_PUBLIC_API_URL}api`,
	credentials: "include",
	prepareHeaders: (headers) => {
		const token = getToken();
		if (token) {
			headers.set("Authorization", `Bearer ${token}`);
		}
		return headers;
	},
}) as BaseQueryFn<
	string | FetchArgs,
	unknown,
	CustomError,
	{},
	FetchBaseQueryMeta
>;

export const baseQueryWithReauth: BaseQueryFn<
	string | FetchArgs,
	unknown,
	CustomError,
	{},
	FetchBaseQueryMeta
> = async (args, api, extraOptions) => {
	let result = await baseQuery(args, api, extraOptions);

	if (result.error?.status === 401) {
		const refreshToken = getRefreshToken();
		const refreshResult = await baseQuery(
			{
				url: "user/refresh",
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
      result = await baseQuery(args, api, extraOptions);
		} else {
			destroyToken();
			destroyRefreshToken();
      if (typeof window !== 'undefined') {
        window.location.href = APP_PAGES.AUTH;
      }
			console.log("Error refresh token");
		}
	}

	return result;
};

// export const authApi = createApi({
//   baseQuery: baseQueryWithReauth,
//   endpoints: builder => ({})
// })
