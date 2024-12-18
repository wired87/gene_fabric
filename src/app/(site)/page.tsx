"use client";

import { Metadata } from "next";
import Hero from "@/components/Hero";

import HomeMain from "@/components/Home";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Individuelle Softwareentwicklung by BotWorld.cloud",
  description: "Homepage for BotWorld.cloud",
}

export default function Home() {
  return (
    <>
      <Hero explanationOrComponent={"Wir unterstützen Unternehmen dabei, neue Ziele zu erreichen, " +
        "indem wir modernste Software, maßgeschneiderte Lösungen und KI-basierte Anwendungen entwickeln " +
        "und integrieren. Unser erfahrenes Team steht Ihnen dabei mit professioneller Beratung und Umsetzung zur Seite."}
        imageOrSection={
          <Image
            src="/images/trust/staff.jpeg"
            alt="shape"
            width={600}
            height={600}
            className="object-contain"
          />
        }
        mainHeading={"Individuelle Software Entwicklung"}
        smallHeading={""}
        noContact={true}
      />
      <HomeMain />
    </>
  );
}
