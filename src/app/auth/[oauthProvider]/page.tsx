"use client";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { authApi } from "@/servicesApi/AuthApi";
import { saveRefreshToken, saveToken } from "@/utils/helpers/JwtHelper";
import { APP_PAGES } from "@/constants/pages-url";
import Spinner from "@/components/ui/spinner/Spinner";
import Button from "@/components/ui/buttons/button/Button";
import ArrowLeftIcon from "@heroicons/react/24/outline/esm/ArrowLeftIcon";
import { NextPage } from "next";

type Props = {
	params: {
		oauthProvider: string;
	};
	searchParams: {
		code: string;
	};
};

const OAuthPage: NextPage<Props> = (props: Props) => {
	const router = useRouter();
	const provider = props.params.oauthProvider;
	const code = props.searchParams.code;
	const [postLoginWithOAuth, { isLoading, error, data: tokens }] =
		authApi.useLoginWithOAuthMutation();

	useEffect(() => {
		if (code) {
			postLoginWithOAuth({ provider, code });
		}
	}, [code, postLoginWithOAuth]);

	useEffect(() => {
		if (tokens) {
			saveToken(tokens.accessToken);
			saveRefreshToken(tokens.refreshToken);
			router.replace(APP_PAGES.HOME);
		}
	}, [tokens, router]);

	return (
		<>
			<div className="flex h-screen w-screen items-center justify-center text-center">
				{error || !code ? (
					<div className="flex flex-col gap-4">
						<h2 className="text-2xl">Ошибка при авторизации</h2>
						<span className="text-gray-400">Попробуйте еще раз</span>
						<Button
							icon={ArrowLeftIcon}
							text="Назад"
							onClick={() => router.replace(APP_PAGES.AUTH)}
							iconClassName="size-4"
							className="w-full rounded-lg border border-gray-200 p-2 text-gray-400 lg:hover:border-primaryLight3 lg:hover:bg-primaryLight3 lg:hover:text-primary"
						/>
					</div>
				) : (
					<Spinner className="size-10 fill-primary" />
				)}
			</div>
		</>
	);
};

export default OAuthPage;
