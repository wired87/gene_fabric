import Image from "next/image";
import {AboutSingleT} from "@/types/about";
import React, {ReactNode} from "react";
import { FaCheck } from "react-icons/fa";
import { motion } from 'framer-motion';

export const getImageSec = (imageSec: ReactNode | string) => {
  if (imageSec) {
    if (typeof imageSec === "string") {
      return(
        <Image fill alt={"hello.png"} className={"object-contain"} src={imageSec}/>
      )
    } else {
      return imageSec
    }
  }
  return(
    <>
      <Image
        src="/images/about/about-light-01.png"
        alt="About"
        className="dark:hidden"
        fill
      />
      <Image
        src="/images/about/about-dark-01.png"
        alt="About"
        className="hidden dark:block"
        fill
      />
    </>
  )
}

export const getPoints = (points: string[] | undefined) => {
  if (points?.length) {
    return(
      <ul className={"grid grid-cols-1 md:grid-cols-2 gap-4 list-none text-left p-0 mt-5"}>
        {points.map((item:string, i:number) => (
          <div className={"flex-row flex gap-4"}>
            <FaCheck size={18} color={"green"}/>
            <li key={i} className={"dark:text-white text-black"}>
              {item}
            </li>
          </div>
        ))}
      </ul>
    )
  }
}

export const SingleSectionTR: React.FC<AboutSingleT> = (
  {
    imageSec,
    headingOne,
    headingTwo,
    exp,
    points,
    btn,
  }
) => {
  const getBtn = (): ReactNode => {
    if (btn) {
      return btn
    }
    return <></>
  }



  return(
    <section className="overflow-hidden pb-10 md:pb-5 lg:pb-25 xl:pb-30">
      <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
        <div className="flex items-center gap-8 lg:gap-32.5">
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: -20,
              },

              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_left bg-red relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
          >
            {
              getImageSec(imageSec)
            }
          </motion.div>
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: 20,
              },

              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_right md:w-1/2 min-w-[500px]"
          >
              <span className="font-medium text-left uppercase text-black dark:text-white">
                <span className="mb-4 text-left mr-4 inline-flex rounded-full bg-meta px-4.5 py-1 text-metatitle uppercase text-white ">
                  {headingOne}
                </span>
              </span>
            <h2 className="relative text-left mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
              <span className="relative text-left inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                  {headingTwo}
                </span>
            </h2>
            <p className={"dark:text-white text-black text-left"}>
              {exp}
            </p>
            {
              getPoints(points)
            }
          </motion.div>
          {getBtn()}
        </div>
      </div>
    </section>
  );
}

export const SingleSectionTL: React.FC<AboutSingleT> = (
  {
    imageSec,
    headingOne,
    headingTwo,
    exp,
    points
  }
) => {
  return(
    <section>
      <div className="mx-auto pb-20 md:pb-10 max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
        <div className="flex items-center justify-between gap-8 lg:gap-32.5">
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: -20,
              },

              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_left md:w-1/2"
          >
            <h4 className="font-medium text-left uppercase text-black dark:text-white">
              {headingOne}
            </h4>
            <h2 className="relative text-left mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
              <span className="relative text-left inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg2 dark:before:bg-titlebgdark">
                  {headingTwo}
                </span>
            </h2>
            <p className={"dark:text-white text-left text-black"}>
              {exp}
            </p>
            {
              getPoints(points)
            }
          </motion.div>
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: 20,
              },

              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_right relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
          >
            {
              getImageSec(imageSec)
            }
          </motion.div>
        </div>
      </div>
    </section>
  )
}