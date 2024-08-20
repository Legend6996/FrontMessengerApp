import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import { SITE_NAME } from "@/constants/seo";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: SITE_NAME,
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<main className="main-container bg-body">
					<StoreProvider>{children}</StoreProvider>
					<Toaster
						richColors
						visibleToasts={6}
						toastOptions={{ style: { fontSize: 15 } }}
					/>
				</main>
			</body>
		</html>
	);
}
