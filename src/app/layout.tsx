import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "./ReactQueryProvider";
import Navbar from "@/components/Navbar";
import NextAuthProvider from "./NextAuthProvider";

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
      <ReactQueryProvider>
        <body className={`${prompt.className} bg-darkest container`}>
          <NextAuthProvider>
            <Navbar />
            {children}
          </NextAuthProvider>
        </body>
      </ReactQueryProvider>
    </html>
  );
}
