import { contact, socials } from "@/lib/constants";
import Link from "next/link"
import { FC } from "react"
import { ISocial } from ".."

const FooterSocialLink: FC<ISocial> = ({ title, link, Icon }) => {
  return (
    <Link 
      href={link}
      target="_blank"
      className="text-white/40 transition-all duration-200 hover:text-white hover:scale-110"
    >
      <Icon className="size-5" />
      <span className="sr-only">{title}</span>
    </Link>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] py-12 px-4 md:px-2 bg-[#030303]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between gap-8">
          <div className="w-1/2">
            <h3 className="text-lg font-semibold mb-4 text-white/90">About Me</h3>
            <p className="text-white/70 mb-4">
              {"I'm"} a passionate software engineer specializing in building exceptional digital experiences. With a focus
              on creating elegant, efficient, and user-friendly applications.
            </p>

            {/* Socials */}
            <div className="flex space-x-4">
              {socials.map(social => (
                <FooterSocialLink 
                  key={social.title}
                  {...social}
                />
              ))}
            </div>
          </div>

          {/* <div>
            <h3 className="text-lg font-semibold mb-4 text-white/90">Quick Links</h3>

            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-white/60 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-white/60 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#skills" className="text-white/60 hover:text-white transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-white/60 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-white/60 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div> */}

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white/90">Contact</h3>
            <ul className="space-y-2">
              <li className="text-white/60">{contact.region}</li>
              <li>
                <Link href="mailto:hello@example.com" className="text-white/60 hover:text-white transition-colors">
                  {contact.mail}
                </Link>
              </li>
              <li>
                <Link href="tel:+15551234567" className="text-white/60 hover:text-white transition-colors">
                  (+234) {contact.mobileNumber}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.08] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/40">&copy; {new Date().getFullYear()} {contact.name}. All rights reserved.</p>
          <p className="text-sm text-white/40 mt-4 md:mt-0">Designed and built with ❤️</p>
        </div>
      </div>
    </footer>
  )
}

