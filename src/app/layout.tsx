import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";

import { MSWComponent, QueryClientProvider } from "@/shared";
import type { Metadata } from "next";

import "./globals.css";

const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CLIP",
  description: "콘텐츠를 요약하고 메모해 친구와 함께 지식을 큐레이션하는 웹앱",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${pretendard.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}>
        <QueryClientProvider>
          <MSWComponent />
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
