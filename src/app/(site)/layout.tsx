"use client";


import { Inter } from "next/font/google";
import "../globals.css";
const inter = Inter({ subsets: ["latin"] });



import React, {useEffect} from "react";

const vfProjId = "66bc9d08a7c181ee33c5c679";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" suppressHydrationWarning>
    <body className={`dark:bg-black w-full ${inter.className}`}>

      <main className={"w-full"}>
        {children}
      </main>

    </body>
    </html>
  );
}
