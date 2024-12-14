import { Metadata } from "next";
import {DesignMain} from "@/components/Design";

export const metadata: Metadata = {
  title: "UI/UX Design",
  description: "This is Login page for Startup Pro",

};

const Design = () => {
  return(
    <>
      <DesignMain />
    </>
  );
}

export default Design;
