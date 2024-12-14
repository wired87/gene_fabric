import React from "react";
import { FeatureTab } from "@/types/featureTab";
import Image from "next/image";
import {getPoints} from "@/components/About/SingleSection";
import {Video} from "@/components/Video";

const FeaturesTabItem = ({ featureTab }: { featureTab: FeatureTab }) => {
  const { title, desc1, desc2, image } = featureTab;

  const getImg = () => {
    if (typeof image === "string") {
      if (image.startsWith("2")) {
        return <Video videoId={image} />
      }
      if (image)
      return(

          <Image src={image} alt={title} fill className="dark:hidden rounded-2xl" />

      );
    }
    return image;
  }

  const getDesc2 = () => {
    if (desc2) {
      if (typeof desc2 === "string") {
        return <p className="w-11/12">{desc2}</p>
      } else {
        return getPoints(desc2);
      }
    }

  }
  return (
    <>
      <div className="flex items-center gap-8 lg:gap-19">
        <div className="md:w-1/2">
          <h2 className="mb-7 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle2">
            {title}
          </h2>
          <p className="mb-5">{desc1}</p>
          {
            getDesc2()
          }
        </div>
        <div className="relative mx-auto hidden aspect-[562/366] max-w-[550px] md:block md:w-1/2">
          {
            getImg()
          }
        </div>
      </div>
    </>
  );
};

export default FeaturesTabItem;
