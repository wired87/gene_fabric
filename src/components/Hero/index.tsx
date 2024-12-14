"use client";
import Image from "next/image";
import React, {ReactNode, useState} from "react";
import Link from "next/link";

interface HeroT {
  smallHeading: string;
  mainHeading: string;
  explanationOrComponent: string | ReactNode;
  actionButtonSection?: ReactNode;
  endingText?: string;
  imageOrSection: string | ReactNode;
  noContact?: boolean;
}

const Hero: React.FC<HeroT> = (
  {
    smallHeading,
    mainHeading,
    explanationOrComponent,
    actionButtonSection,
    endingText,
    imageOrSection,
    noContact
  }
) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const getMainContent = () => {
    if (typeof explanationOrComponent === "string") {
      return(
        <p>
          {explanationOrComponent}
        </p>
      )
    }
    return explanationOrComponent
  }


  const getActionBtnSection = () => {
    if (actionButtonSection) {
      return actionButtonSection
    }
    if (!noContact) {
      return(
        <Link
          href={"/contact"}
          aria-label="get started button"
          className="flex max-w-[250px] justify-center items-center hover:brightness-125 rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
        >
          Get Started
        </Link>

      )
    }

      /*
       <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap gap-5">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Enter your email address"
            className="rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
          />
          <button
            aria-label="get started button"
            className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
          >
            Get Started
          </button>
        </div>
      </form>
       */

  }

  const getImageSection = () => {
    if (imageOrSection) {
      if (typeof imageOrSection === "string") {
        return(
          <Image
            src="/images/shape/shape-01.png"
            alt="shape"
            width={46}
            height={246}
            className="absolute -left-11.5 top-0"
          />
        );
      }else {
        return imageOrSection;
      }
    }
    return(
      <div className="relative 2xl:-mr-7.5">
        {/*<Image
          src="/images/shape/shape-01.png"
          alt="shape"
          width={46}
          height={246}
          className="absolute -left-11.5 top-0"
        />
        <Image
          src="/images/shape/shape-02.svg"
          alt="shape"
          width={36.9}
          height={36.7}
          className="absolute bottom-0 right-0 z-10"
        />
        <Image
          src="/images/shape/shape-03.svg"
          alt="shape"
          width={21.64}
          height={21.66}
          className="absolute -right-6.5 bottom-0 z-1"
        />
        <div className=" relative aspect-[700/444] w-full">
          <Image
            className="shadow-solid-l dark:hidden"
            src="/images/hero/hero-light.svg"
            alt="Hero"
            fill
          />
          <Image
            className="hidden shadow-solid-l dark:block"
            src="/images/hero/hero-dark.svg"
            alt="Hero"
            fill
          />
        </div>*/}
      </div>
    )
  }

  return (
    <>
      <section className="overflow-hidden w-full pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                {smallHeading}
              </h4>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                {mainHeading}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                  {/*todo*/}
                </span>
              </h1>
              {
                getMainContent()
              }
              <div className="mt-10">
                {
                  getActionBtnSection()
                }
                <p className="mt-5 text-black dark:text-white">
                  {
                    endingText
                  }
                </p>
              </div>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              {
                getImageSection()
              }
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
