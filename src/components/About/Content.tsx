"use client";
import FunFact from "@/components/FunFact";
import {detailedFacts} from "@/components/FunFact/factData";
import SectionHeader from "@/components/Common/SectionHeader";
import Blog from "@/components/Blog";
import {teamData} from "@/components/Blog/blogData";
import {SingleSectionTR} from "@/components/About/SingleSection";
import React from "react";
import Image from "next/image"
import CTA from "@/components/CTA";
const exp: string = "\n" +
  "Wir arbeiten mit einem kleinen Netzwerk ausgewählter Top-Freelancer und Freiberufler in ganz Deutschland zusammen, " +
  "die sich durch ihre Expertise, Zuverlässigkeit und Leidenschaft für innovative " +
  "Lösungen auszeichnen. Gemeinsam stellen wir sicher, dass Ihr Projekt in den besten Händen " +
  "ist und von einem Team profitiert, das Ihre individuellen Anforderungen versteht und optimal umsetzt.";

const headerInfo = {
  title: "C-Level",
  subtitle: "Führungskräfte",
  description: ``,
}

const g = {
  title: "Mid-Level",
  subtitle: "Unser Netzwerk",
  description: `Profitieren Sie von unserem bewährten und sorgfältig ausgesuchten 
  Partnernetzwerk von in Deutschland ansässigen Freiberuflern, welche in der 
  Vergangenheit häufig einen wertvollen Beitrag geleistet haben.
  `,
}
export const MainContent = () => {
  return(
    <>
      <FunFact data={detailedFacts} />

      <Blog
        data={teamData}
        headerInfo={headerInfo}
      />

      <SectionHeader headerInfo={g} />
      <SingleSectionTR
        exp={exp}
        headingOne={"Unser Team"}
        headingTwo={""}
        imageSec={<Image
          priority
          src={"/images/trust/net.jpg"}
          alt={"https://static.vecteezy.com/system/resources/previews/002/459/900/non_2x/social-network-people-connecting-all-over-the-world-flat-illustration-free-vector.jpg"}
          width={600}
          height={600}
        />}
        points={
          [
            "3-köpfiges Führungsteam",
            "Umfangreiche Erfahrungen und Fähigkeiten",
            "Hoch Qualifizierte Freiberufler",
            "Jede gängige Technologie mehrfach vertreten",
          ]
        }
      />

      <CTA />

    </>
  )
}