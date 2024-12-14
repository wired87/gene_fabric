"use client";
import Hero from "@/components/Hero";
import React from "react";
import SectionHeader from "@/components/Common/SectionHeader";
import CTA from "@/components/CTA";
import Feature from "@/components/Features";
import {workWithUsUIFeaturesData} from "@/components/Features/featuresData";
import Contact from "@/components/Contact";
import {SingleSectionTL, SingleSectionTR} from "@/components/About/SingleSection";
import Image from "next/image";

const heroText: string = "Bringen Sie Ihre Ideen mit unserer preisgekrönten MVP-Entwicklung erfolgreich auf " +
  "den Markt und validieren Sie sie mit echten Nutzern. Wir sorgen dafür, dass Ihr Produkt sein " +
  "volles Potenzial entfaltet und sich am Markt durchsetzt.";

const headerInfo = {
  title: "",
  subtitle: "Was zeichnet uns aus?",
  description: "",
  link: false
}

const heroImg: string = "/images/trust/engine.jpg";
const mvpDev: string = "/images/trust/engine_dev.jpg";


const topSection = {
  imageSec: "/images/mvp/idea.png", //"https://www.nextbraintech.com/assets/front/base/images/mvp-inner-img.png",
  headingOne: "",
  headingTwo: "Produkt-Entdeckung",
  exp: "Wir analysieren gründlich den Markt und bewerten die Probleme und Herausforderungen der Nutzer, um ein " +
    "Produkt zu entwickeln, das genau diesen Anforderungen gerecht wird.",
  points: [
    "Software-Architektur",
    "Technische Anforderungen",
    "UI-UX-Design"
  ]
}
const middleSection = {
  imageSec: "/images/mvp/mvp.png", //"https://blog.solguruz.com/wp-content/uploads/2023/11/Minimum-Viable-Product-8-Benefits-of-MVP-Development.png",
  headingOne: "",
  headingTwo: "MVP-Design",
  exp: "Das Design entsteht forschungsbasiert von Grund auf, um eine nahtlose Nutzererfahrung und " +
    "eine ansprechende Benutzeroberfläche zu gewährleisten. Dabei Interagieren wir stets mit unseren Kunden #" +
    "um Ihre zufriedenheit zu gewährleisten",
  points: [
    "Nutzer-Personas",
    "Journey Mapping",
    "Wireframing und Prototyping"
  ]
}
const bottomSection = {
  imageSec: mvpDev,
  headingOne: "",
  headingTwo: "MVP-Entwicklung",
  exp: "Unser Team begleitet den gesamten Entwicklungs- und Implementierungsprozess und konzentriert sich auf " +
    "die Kernfunktionen, um das Produkt zu testen und mit der Zielgruppe zu validieren.",
  points: [
    "Kernfunktionalität",
    "Produktentwicklung",
    "Nutzertests"
  ]
}




const ImageSection = () => {
  return(
    <Image
      width={600}
      height={600}
      src={heroImg}
      className={"rounded-xl object-contain"}
      alt={"https://pixabay.com/de/photos/techniker-ingenieurwesen-rechner-4904881/"}
    />
  );
}


export const MVPMain = () => {
  const headerConf = {
    title:"Unser MVP Workflow",
    subtitle:"",
    description:"",
    link:false
  }

  return(
    <>
      <Hero
        explanationOrComponent={heroText}
        imageOrSection={<ImageSection />}
        mainHeading={"Gehen Sie mit uns den ersten Schritt"}
        smallHeading={"In Ihrer Roadmap"}
        endingText={""}
      />

      <SectionHeader  headerInfo={headerConf}/>
      <SingleSectionTR
        imageSec={topSection.imageSec}
        headingOne={topSection.headingOne}
        headingTwo={topSection.headingTwo}
        exp={topSection.exp}
      />
      <SingleSectionTL
        imageSec={middleSection.imageSec}
        headingOne={middleSection.headingOne}
        headingTwo={middleSection.headingTwo}
        exp={middleSection.exp}

      />
      <SingleSectionTR
        imageSec={bottomSection.imageSec}
        headingOne={bottomSection.headingOne}
        headingTwo={bottomSection.headingTwo}
        exp={bottomSection.exp}
      />

      <CTA />

      <Feature data={workWithUsUIFeaturesData} headerInfo={headerInfo} />

      <Contact />
    </>
  );
}