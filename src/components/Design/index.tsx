"use client";
import Hero from "@/components/Hero";
import React from "react";
import Feature from "@/components/Features";
import {workWithUsUIFeaturesData} from "@/components/Features/featuresData";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import {SingleSectionTR, SingleSectionTL} from "@/components/About/SingleSection";
import Image from "next/image";
import SectionHeader from "@/components/Common/SectionHeader";

const headerExp: string = "Herausragendes UI/UX Design ist der Schlüssel zu einer erfolgreichen Software." +
  "Durch unsere Expertise in UI/UX Design verwandeln wir Ihre Software in ein leistungsstarkes " +
  "Werkzeug, das sich durch Benutzerfreundlichkeit und Ästhetik auszeichnet.";

const headerInfo = {
  title: "",
  subtitle: "Was zeichnet uns aus?",
  description: "",
  link: false
}

const topSection = {
  imageSec: "/images/design/mobile.webp", //"https://i2.wp.com/www.wendyzhou.se/blog/wp-content/uploads/2019/08/uixninja.png?fit=1600%2C1200&ssl=1",
  headingOne: "",
  headingTwo: "UI/UX Design",
  exp: "Wir sind darauf spezialisiert, " +
    "exzellente Nutzererlebnisse zu schaffen, die durch innovative " +
    "Methoden die Kundenzufriedenheit steigern und Unternehmen voranbringen."
}
const middleSection = {
  imageSec: "/images/design/statistic.webp", //"https://www.travelpayouts.com/blog/wp-content/uploads/2020/06/statistic-google.jpg",
  headingOne: "",
  headingTwo: "User Experience Analyse",
  exp: "Wir verschaffen Marken einen Wettbewerbsvorsprung, " +
    "indem wir das Nutzerverhalten analysieren und Ideen basierend auf " +
    "Nutzerwahrnehmungen und -bedürfnissen validieren."
}

const bottomSection = {
  imageSec: "/images/design/mob2.png", //"https://miro.medium.com/v2/resize:fit:3200/1*8ifpC7J69gtWlx_-3uOoFA.png",
  headingOne: "",
  headingTwo: "UX-Audit",
  exp: "Unser Team analysiert Ihr bestehendes Design und zeigt Optimierungspotenziale auf, " +
    "um die Nutzerattraktivität Ihres Unternehmens zu steigern."
}


const ImageSection = () => {
  return(
    <div className={"flex relative justify-center items-center"}>
      <Image
        priority
        src="/images/shape/shape-01.png"
        alt="shape"
        width={46}
        height={246}
        className="absolute right-2 bottom-2"
      />
      <Image
        priority
        src="/images/shape/shape-04.png"
        alt="shape"
        width={100}
        height={246}
        className="absolute left-4 bottom-0"
      />
      <Image
        priority
        src="/images/shape/shape-05.png"
        alt="shape"
        width={46}
        height={246}
        className="absolute top-6 left-7"
      /> <Image
      priority
      src="/images/shape/shape-06.png"
        alt="shape"
        width={300}
        height={246}
        className=""
      />
    </div>
  );
}

export const DesignMain = () => {
  const headerConf = { //todo
    title:"Service",
    subtitle:"Unsere Dienstleistungen",
    description:"", 
    link:false
  }
  return(
    <>
      <Hero
        explanationOrComponent={headerExp}
        imageOrSection={<ImageSection />}
        mainHeading={"Überzeugen Sie sich von unserer Expertise in Design"}
        smallHeading={""}
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

      <Feature data={workWithUsUIFeaturesData} headerInfo={headerInfo}/>

      <Contact />
    </>
  )
}