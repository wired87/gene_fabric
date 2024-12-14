import {ReactNode} from "react";

export type FeatureTab = {
  id: string;
  title: string;
  desc1: string;
  desc2: string | string[];
  image: string | ReactNode;
  imageDark?: string;
};
