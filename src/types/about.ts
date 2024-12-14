import {ReactNode} from "react";

export interface AboutSingleT {
  headingOne: string;
  headingTwo: string;
  exp: string;
  imageSec?: ReactNode;
  points?: string[];
  btn?: ReactNode;
}