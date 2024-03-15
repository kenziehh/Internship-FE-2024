import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "../components/layouts/ReactQueryProvider";
import Navbar from "@/components/Navbar";
import NextAuthProvider from "../components/layouts/NextAuthProvider";

const prompt = Prompt({ weight: ["400", "500", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Destinify",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png"></link>
      </head>
      <ReactQueryProvider>
        <body className="bg-darkest">
          <NextAuthProvider>
            <Navbar />
            <main className={`${prompt.className} container`}>{children}</main>
          </NextAuthProvider>
        </body>
      </ReactQueryProvider>
    </html>
  );
}
