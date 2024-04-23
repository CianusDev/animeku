"use client"
import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Providers from "./provider";
import { cn } from "@nextui-org/react";


const inter = Nunito_Sans({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={cn(inter.className,"")}>
        <Providers>
        {children}
        </Providers>
      </body>
    </html>
  );
}
