import type { IconBaseProps } from "@remixicon/react";
import { StaticImageData } from "next/image";

interface ISocial {
  title: string;
  link: string;
  Icon: IconBaseProps;
}

type IProject = {
  title: string;
  description: string;
  image: string | StaticImageData | null;
  role: string;
  link: string;
  stacks: string[];
};

type IService = {
  title: string;
  description: string;
};
