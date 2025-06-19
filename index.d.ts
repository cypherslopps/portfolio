import { StaticImageData } from "next/image";

interface ISocial {
    title: string;
    link: string;
    Icon: any
}

type IProject = {
    title: string,
    description: string,
    image: string|StaticImageData|null,
    link: string,
    stacks: string[]
}

type IService = {
    title: string;
    description: string;
}