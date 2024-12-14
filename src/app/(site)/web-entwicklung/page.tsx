
import { Metadata } from "next";
import React from "react";
import Hero from "@/components/Hero";
import Image from "next/image";

import {MainContent} from "@/components/web/MainContent";
export const metadata: Metadata = {
  title: "Web Entwicklung",
  description: "Wir erstellen Ihre individuelle Web-Lösung.",

};



const Presentation = () => {
  // carousel here
  return(

    <Image width={800} height={800} src={"/images/trust/girl_c1.jpg"} className={"object-cover"} alt={"https://www.pexels.com/photo/woman-facing-computer-monitor-1181473/"}/>

  );
}
// todo bilde raussuchen carousel + carousel einrichten
// todo cta mit bild

const WebDev = () => {

  return(
    <>
      <Hero
        explanationOrComponent={"Wir erstellen Individuell, auf Ihre Wünsche Angepasste Applikationslösungen welche perfekt zu Ihrem Unternehmen passen."}
        imageOrSection={<Presentation />}
        mainHeading={"Qualitativ hochwertige Webanwendungen"}
        smallHeading={""}
        endingText={""}
      />
      <MainContent />
    </>
  );
}

export default WebDev;