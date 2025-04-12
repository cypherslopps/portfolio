import Icons from "@/components/Icons";

// Assets
import Project1Image from "@/public/project-1.png";
import { IProject, ISocial } from "..";

// Avatars
import Avatar1 from "@/public/memoji-avatar-3.png";
import Avatar2 from "@/public/memoji-avatar-5.png";
import Avatar3 from "@/public/memoji-avatar-3.png";

export const contact = {
    mobileNumber: "08028456343",
    whatsapp: "08157483352",
    region: "Uyo, Akwa Ibom - Nigeria",
    mail: "josephibok75@gmail.com",
    name: "Joseph Ibok"
};

export const socials: ISocial[] = [
    {
        title: "Github",
        link: "https://github.com/cypherslopps",
        Icon: Icons.github
    },
    {
        title: "X",
        link: "https://x.com/josephibok36",
        Icon: Icons.x
    },
    {
        title: "LinkedIn",
        link: "https://linkedin.com/josephibok54",
        Icon: Icons.linkedIn
    },
    {
        title: "WhatsApp",
        link: `https://whatsapp.com/${contact.whatsapp}`,
        Icon: Icons.whatsapp
    },
    {
        title: "Mail",
        link: `mailto:${contact.mail}`,
        Icon: Icons.mail
    }
]

export const testimonials = [
    {
      id: 1,
      name: "Winner Johnson",
      role: "CTO at TechCorp",
      image: Avatar1,
      content:
        "One of the most talented developers I've worked with. Their ability to solve complex problems while maintaining clean, maintainable code is impressive. They consistently delivered high-quality work ahead of schedule.",
    },
    {
      id: 2,
      name: "Abasifreke James Udo",
      role: "Product Manager at InnovateCo",
      image: Avatar2,
      content:
        "An exceptional engineer who brings both technical expertise and creative thinking to every project. They have a unique ability to understand business requirements and translate them into elegant technical solutions.",
    },
    {
      id: 3,
      name: "Bisola",
      role: "Lead Developer at StartupX",
      image: Avatar3,
      content:
        "Working with them was a game-changer for our team. Their deep knowledge of modern web technologies and best practices helped us refactor our entire codebase, resulting in a 40% performance improvement.",
    }
]

export const projects: IProject[] = [
    {
        company: "Acme Corp",
        year: "2022",
        title: "Frontend Engineer",
        results: [
            { title: "Ensured" },
            { title: "Maka" },
            { title: "Blue" }
        ],
        link: "https://lsdsasadas.com",
        image: Project1Image
    },
    {
        company: "CasinoBetil",
        year: "2033",
        title: "Senior Frontend Engineer",
        results: [
            { title: "Maka" },
            { title: "Md" },
            { title: "d" }
        ],
        link: "https://casinobetil.com",
        image: Project1Image
    }
]