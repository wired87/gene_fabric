"use client";


import {SingleSectionTL, SingleSectionTR} from "@/components/About/SingleSection";
import React from "react";

const topSection = {
  imageSec: "/images/bot/eng.png",
  headingOne: "Ihr digitaler Kundenservice-Experte",
  headingTwo: "24/7 Verfügbarkeit",
  exp: "Bieten Sie Ihren Kunden erstklassigen Support rund um die Uhr, 24 Stunden am Tag, " +
    "7 Tage die Woche – auch außerhalb Ihrer Geschäftszeiten. Das spart Zeit und Geld. " +
    "Unser Bot übernimmt die Bearbeitung von Kundenanfragen im digitalen Raum, " +
    "entlastet Ihr Team und spart Ihnen wertvolle Ressourcen. ",
}

const middleSection = {
  imageSec: "/images/bot/tools.png",
  headingOne: "Integrations",
  headingTwo: "Verknüpfbar mit dutzenden services",
  exp: "",
  points: [
    "Personalisierte KD interaktion",

    "Bestellungen aufgeben",

    "Auf allen gängigen Plattformen",

    "Viele Sprachen",

    "Promote produkte",

    "Erhalte Feedback"
  ]
}

const bottomSection = {
  imageSec: "/images/bot/chnnels.jpg", // "https://static.vecteezy.com/system/resources/previews/004/112/841/original/facebook-instagram-and-telegram-logo-free-vector.jpg",
  headingOne: "",
  headingTwo: "Multi Channel Verfügbarkeit",
  exp: "Keine Einschränkungen! Unser Bot ist in die gängigsten Plattformen integrierbar",
  points: [
    "Instagram",
    "Facebook Messenger",
    "Telegram",
    "WhatsApp",
    "Mobil"
  ]
}



const ChatBotNeed = () => {
  return (
    <>
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
        points={middleSection.points}

      />
      <SingleSectionTR
        imageSec={bottomSection.imageSec}
        headingOne={bottomSection.headingOne}
        headingTwo={bottomSection.headingTwo}
        exp={bottomSection.exp}
        points={bottomSection.points}
      />
    </>
  );
};

export default ChatBotNeed;
