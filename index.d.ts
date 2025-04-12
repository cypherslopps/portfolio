import { StaticImageData } from "next/image";

interface ISocial {
    title: string;
    link: string;
    Icon: any
}

interface IProjectResult {
    title: string;
}

interface IProject {
    company: string;
    year: string;
    title: string;
    results: IProjectResult[];
    link: string;
    image: StaticImageData | string;
}