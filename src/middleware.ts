import { NextRequest, NextResponse } from "next/server";
import { REFRESH_TOKEN_KEY } from "./utils/helpers/JwtHelper";
import { APP_PAGES } from "./constants/pages-url";

export async function middleware(request: NextRequest, response: NextResponse) {
	const { url, cookies } = request;

	const refreshToken = cookies.get(REFRESH_TOKEN_KEY)?.value;
	const isLoginPage = url.includes(APP_PAGES.AUTH);

	if (isLoginPage && refreshToken) {
		return NextResponse.redirect(new URL(APP_PAGES.HOME, url));
	}

	if (!isLoginPage && !refreshToken) {
		return NextResponse.redirect(new URL(APP_PAGES.AUTH, request.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
