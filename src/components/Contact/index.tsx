"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, {useCallback, useEffect, useState} from "react";
import {Checkbox, CheckboxGroup} from '@nextui-org/react';
import {Slider} from "@nextui-org/slider";
import {CheckBoxObj, MailT} from "@/types/contact";

import {Spinner} from "@nextui-org/spinner";
import CModal from "@/components/Modal";
import axios from "axios";


const checkBoxValues: CheckBoxObj[] = [
  {
    title: "MVP Entwicklung",
    selected: false
  },{
    title: "Individuelle Software Entwicklung",
    selected: false
  },{
    title: "UI/UX Design",
    selected: false
  },{
    title: "Kontakt",
    selected: false
  },
]

const checkBoxValues2: CheckBoxObj[] =[
  {
    title: "Webentwicklung",
    selected: false
  },{
    title: "Mobile App Entwicklung",
    selected: false
  },
  {
    title: "KI Entwicklung/Integration",
    selected: false
  },{
    title: "Chat Bot",
    selected: false
  },{
    title: "SEO-Optimierung",
    selected: false
  },
]


const sliderMasrks = [
  {
    value: 3,
    label: "3",
  },{
    value: 6,
    label: "6",
  },{
    value: 9,
    label: "9",
  },{
    value: 12,
    label: "12",
  },{
    value: 15,
    label: "15",
  },{
    value: 18,
    label: "18",
  },{
    value: 21,
    label: "21",
  },{
    value: 24,
    label: "24",
  },

]
const Contact = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const updateSuccessError = () => {
    setError(false);
    setSuccess(false);
  }

  const [formData, setFormData] = useState<MailT>({
    name: '',
    email: '',
    subject: '',
    phone: '', // Optional
    message: '',
    preferredServices: selected, // Array for multiple checkboxes
    time: 0, // Slider value
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  useEffect(() => {
    console.log("formData",formData);
  }, [formData]);
  useEffect(() => {
    console.log("selected",selected);
  }, [selected]);
  const handleSliderChange = (value: number) => {
    setFormData({ ...formData, time: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setError(false);
    setSuccess(false);
    if (!loading) {
      setLoading(true);
      e.preventDefault();
      try { // 'http://localhost:3000/api/' 'https://www.botworld.cloud/api/'
        const res = await axios.post('https://www.botworld.cloud/api/', formData);
        console.log("res: ",res);
        if (res.data.ok) {
          setSuccess(true);
          setError(false);
          setSelected([]);
          setFormData({
            name: '',
            email: '',
            subject: '',
            phone: '',
            message: '',
            preferredServices: selected,
            time: 0,
          });
        } else {
          setError(true);
          setSuccess(false);
        }

      } catch(e:unknown) {
        if (e instanceof Error) {
          console.log("Error occurred:", e);
          setError(true);
        }
      }finally {
        setLoading(false);

      }
    }
  };
  const getModal = useCallback(() => {
    if (error) {
      return <CModal state={false} updateState={updateSuccessError} />
    } else if (success) {
      return <CModal state={true} updateState={updateSuccessError} />
    }
  }, [error, success]);

  const btnContent = () => {
    if (loading) {
      return(
        <Spinner size={"sm"} color="primary" labelColor="foreground"/>
      )
    }

    return(
      <svg
        className="fill-white"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
          fill=""
        />
      </svg>
    )
  }

  return (
    <>
      <section id="support" className="px-4 md:px-8 2xl:px-0 mb-15 w-full">
        <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
          <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-gradient-to-t dark:to-[#252A42]"></div>
          <div className="absolute bottom-[-255px] left-0 -z-1 h-full w-full">
            <Image
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
              fill
            />
            <Image
              src="./images/shape/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
              fill
            />
          </div>

          <div className="flex flex-col-reverse flex-wrap gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full rounded-lg bg-white p-7.5 shadow-solid-8 dark:border
              dark:border-strokedark dark:bg-black md:w-3/5 lg:w-3/4 xl:p-15"
            >
              <h2 className="mb-15 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                Fordern Sie den Preis für Ihr Projekt an
              </h2>
              <form
                onSubmit={handleSubmit}
                method="POST"
              >
                <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <input
                    type="text"
                    required
                    name={"name"}
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  />

                  <input
                    type="email"
                    required
                    name={"email"}
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  />
                </div>

                <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <input
                    type="text"
                    name={"subject"}
                    value={formData.subject}

                    onChange={handleChange}
                    placeholder="Betreff"
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  />

                  <input
                    type="text"
                    name={"phone"}
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Telefon (optional)"
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  />
                </div>
                <div className={"my-10 "}>
                  <h3 className={"bold my-4"}>Dienstleistungen</h3>
                  <div className={"flex flex-col gap-x-7 gap-y-3 md:flex-row"}>
                    <CheckboxGroup
                      onChange={setSelected}
                      onValueChange={setSelected}
                      value={selected}>
                      {checkBoxValues.map((item: CheckBoxObj, i: number) => (
                        <Checkbox
                          value={item.title}
                          key={i}>
                          {item.title}
                        </Checkbox>
                      ))}
                    </CheckboxGroup>
                    <CheckboxGroup
                      onValueChange={setSelected}
                      value={selected}>
                      {checkBoxValues2.map((item: CheckBoxObj, i: number) => (
                        <Checkbox
                          value={item.title}
                          key={i}>
                          {item.title}
                        </Checkbox>
                      ))}
                    </CheckboxGroup>
                  </div>
                </div>
                <div className={"mb-10 gap-y-4"}>
                  <Slider
                    size="sm"
                    onChangeEnd={(value:number) => handleSliderChange(value)}
                    step={1}
                    maxValue={24}
                    minValue={1}
                    label="Gewünschte Zeitspanne ( Monate )"
                    defaultValue={24}
                    value={formData.time}
                    name={"time"}
                    className="w-full"
                    showSteps={true}
                    marks={sliderMasrks}
                  />
                </div>
                <div className="mb-11.5 flex flex-col">
                  <h3 className={"mb-2 bold my-4 underline-offset-2"}>Projektbeschreibung</h3>
                  <textarea
                    placeholder="Geplant ist..."
                    required
                    value={formData.message}
                    name={"message"}
                    onChange={handleChange}
                    className="w-full border-b border-stroke bg-transparent focus:border-waterloo
                      focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark
                      dark:focus:border-manatee dark:focus:placeholder:text-white"
                  >
                    </textarea>
                </div>
                <div className="flex flex-wrap gap-4 xl:justify-between ">


                  <button
                    type={"submit"}
                    aria-label="send message"
                    className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark"
                  >
                    Nachricht senden
                    {
                      btnContent()
                    }
                  </button>

                </div>

              </form>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 2, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full md:w-2/5 md:p-7.5 lg:w-[26%] xl:pt-15"
            >
              <h2 className="mb-12.5 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                Wir freuen uns auf Ihre Nachricht!
              </h2>
              <div className="5 mb-7">

            </div>

              <div>
               <Image height={100} width={100} alt={"hello_call_center"} className={"object-contain mb-5"} src={"/images/contact/call_center.jpg"}/>
              </div>
              <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                E-Mail-Adresse
              </h3>
              <p>
                <a href="#">info@botworld.cloud</a>
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {
        getModal()
      }
    </>
  );
};

export default Contact;
