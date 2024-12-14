import { Metadata } from "next";
import Hero from "@/components/Hero";
import Image from "next/image";
import SectionHeader from "@/components/Common/SectionHeader";
import React from "react";
import FeaturesTab from "@/components/FeaturesTab";
import CTA from "@/components/CTA";
import {mobileTabData} from "@/components/FeaturesTab/featuresTabData";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "UI/UX Design",
  description: "This is Login page for Startup Pro",
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
const ImageSection = () => {
  return(
    <>
      <Image
        src="/images/mobile/main.png"
        alt="shape"
        width={46}
        height={246}
        className="absolute -left-11.5 top-0"
      />
    </>
  )
}

const Mobile = () => {

  return(
    <>
      <Hero
        smallHeading={""}
        mainHeading={"Entwicklung maßgeschneiderter mobiler Anwendungen"}
        explanationOrComponent={"Wir garantieren zeitgemäße und voll funktionsfähige mobile Anwendungen, die den Anforderungen des Marktes und Ihnen als Kunden gerecht werden."}
        actionButtonSection={<MobileAction />}
        endingText={""}
        imageOrSection={<ImageSection />}
      />
      <div className="animate_top mx-auto text-center">
        <SectionHeader
          headerInfo={{
            title: `Umfassender Service`,
            subtitle: `Unser Mobile Tech Stack`,
            description: ``,
          }}
        />
      </div>
      <FeaturesTab
          titleOne={"Android"}
          titleTwo={"IOS"}
          titleThree={"Cross Plattform"}
          data={mobileTabData}
      />
      <CTA />
      <Contact />
    </>
  );
}

export default Mobile;