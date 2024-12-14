import React from 'react';
import { Metadata } from "next";
import TypeIndex from "@/components/Contact/type_index";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Page",
};
// import {Code} from "@nextui-org/code";

const ContactPage = () => {

  return(
    <section className={"flex py-20 justify-center items-center mt-10"}>
      <TypeIndex />
    </section>
  );
}
export default ContactPage;