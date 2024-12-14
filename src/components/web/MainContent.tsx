"use client";
import FeaturesTab from "@/components/FeaturesTab";
import {webTabData} from "@/components/FeaturesTab/featuresTabData";
import CTA from "@/components/CTA";
import SectionHeader from "@/components/Common/SectionHeader";
import {SingleSectionTR} from "@/components/About/SingleSection";
import Contact from "@/components/Contact";
import React from "react";
import Feature from "@/components/Features";
import {workWithUsFeaturesData} from "@/components/Features/featuresData";

const exp: string = "Kundenzufriedenheit ist unser höchstes Ziel. " +
  "Daher nutzen wir nicht nur die fortschrittlichsten KI-Tools, um unseren Workflow zu optimieren, " +
  "sondern setzen auch auf kontinuierlichen Austausch und enge Zusammenarbeit, um unseren Kunden" +
  " maßgeschneiderte und erstklassige Ergebnisse zu garantieren."

const headerInfo = {
  title: "",
  subtitle: "Warum Sie mit uns zusammen arbeiten sollten",
  description: "",
  link: false
}
export const MainContent = (



) => {
  const sectionHeaderStuff = {
    title: "Modernste Technologien",
    subtitle: "Auf dem neusten Stand!",
    description: "",
    link: false

  }

  return(
    <>

      <FeaturesTab
        titleOne={"Web-Apps"}
        titleTwo={"Websites"}
        titleThree={"E-commerce / Saas"}
        data={webTabData}
      />
      <CTA />


      <Feature data={workWithUsFeaturesData} headerInfo={headerInfo}/>

      <SectionHeader
        headerInfo={sectionHeaderStuff} />

      <SingleSectionTR
        imageSec={"/images/design/ai.webp"} // https://miro.medium.com/v2/resize:fit:828/format:webp/1*e1pEmosqksBMn2FQYlEc2g.png
        headingOne={"Modernste Technologien"}
        headingTwo={"Erleben Sie die Vorteile von KI"}
        exp={exp}
      />
      <Contact />
    </>
  );
}