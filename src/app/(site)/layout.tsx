"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "../globals.css";
const inter = Inter({ subsets: ["latin"] });
import {NextUIProvider} from '@nextui-org/react'


import ToasterContext from "../context/ToastContext";
import React, {useEffect} from "react";

const vfProjId = "66bc9d08a7c181ee33c5c679";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  /*useEffect(() => {
    (function (d, t) {
      var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
      v.onload = function() {
        // @ts-ignore
      window.voiceflow.chat.load({
      verify: {projectID: vfProjId},
      url: 'https://general-runtime.voiceflow.com',
      versionID: 'production'
      });
      }// @ts-ignore
        v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
      })
      (document, 'script'
      )
    ;
  }, []);*/

  return (
    <html lang="en" suppressHydrationWarning>
    <body className={`dark:bg-black w-full ${inter.className}`}>

    <ThemeProvider
      enableSystem={false}
      attribute="class"
      defaultTheme="light"
    >
      <NextUIProvider>
        <Lines/>
        <Header/>
        <ToasterContext/>

        <main className={"w-full"}>
          {children}
        </main>

        <ScrollToTop/>
        <Footer/>

      </NextUIProvider>
    </ThemeProvider>
    </body>
    </html>
  );
}
