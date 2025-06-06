import { StaticImageData } from "next/image";

interface ISocial {
    title: string;
    link: string;
    Icon: any
}

type IProject = {
    title: string,
    image: string|StaticImageData|null,
    link: string,
    stacks: string[]
  }