import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Trello",
    description: "This is Trello Task Managment",
};

type RootLayoutProps = {
    children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                {/* <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                > */}
                <SessionProvider>{children}</SessionProvider>
                {/* </ThemeProvider> */}
            </body>
        </html>
    );
}
