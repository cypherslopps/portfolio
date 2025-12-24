import { IconSvgElement } from "@hugeicons/react";
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
  contribution?: string[];
  link: string | null;
  stacks: string[];
};

type IService = {
  Icon: IconSvgElement;
  title: string;
  description: string;
};
