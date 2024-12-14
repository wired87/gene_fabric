import { Metadata } from "next";
import Hero from "@/components/Hero";
import Image from "next/image";
import SectionHeader from "@/components/Common/SectionHeader";
import React from "react";
import FeaturesTab from "@/components/FeaturesTab";
import CTA from "@/components/CTA";
import {aiTabData} from "@/components/FeaturesTab/featuresTabData";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "KI",
  description: "KI Entwicklung service Beschreibung",
};

const MobileAction = () => {
  return(
    <button
      aria-label="get started button"
      className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
    >
      Get Started
    </button>
  )
}


const ImageSectionCTA = () => {
  return(
    <Image
      src="/images/bot/cb_c.svg"
      alt="png"
      width={200}
      height={200}
      className="absolute object-contain"
    />
  )
}
const ImageSection = () => {
  return(
    <Image
      src="/images/ki/train.jpg" //"https://di3xp7dfi3cq.cloudfront.net/media/catalog/product/cache/0fbcefc3a799a327b223626345048888/m/o/models-1.jpg"
      alt="png"
      width={1000}
      height={600}
      className="object-contain rounded-3xl shadow-sm dark:shadow-amber-200 shadow-blue-600"
    />
  )
}
const chatBotPros = [
  "Niemals krank",
  "Verarbeitet dutzende Kundenanfragen gleichzeitig",
  "Auf allen gängigen Plattformen und Channels verfügbar",
]
const KIMain = () => {

  return(
    <>
      <Hero
        smallHeading={""}
        mainHeading={"Gehen Sie mit dem Fortschritt der Technologie"}
        explanationOrComponent={"Implementieren Sie mit unserer KI-Entwicklung modernste Lösungen in " +
          "Ihre Geschäftsprozesse, die Ihr Wachstum beschleunigen, Kunden zufrieden stellen und Ihren Service neu definieren."}
        actionButtonSection={<MobileAction />}
        endingText={""}
        imageOrSection={<ImageSection />}
      />
      <div className="animate_top mx-auto text-center">
        <SectionHeader
          headerInfo={{
            title: `Was wir bieten`,
            subtitle: `Unsere KI-Dienstleistungen`,
            description: ``,
          }}
        />
      </div>
      <FeaturesTab
          titleOne={"Produktentwicklung"}
          titleTwo={"Modellierung"}
          titleThree={"Integration"}
          data={aiTabData}
      />

      <CTA
        heading={"Digitaler Mitarbeiter gefällig?"}
        des={chatBotPros}
        image={<ImageSectionCTA />}
        btnText={"Zeigs mir!"}
        href={"/chatbot"}
      />
      <Contact />
    </>
  );
}

export default KIMain;