import { contact, socials } from "@/lib/constants";
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-7 px-4 md:px-2 bg-gradient-to-b from-[#030303]/30 to-[#030303]/85">        
      <div className="max-w-7xl mx-auto border-t border-white/[0.08] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-white/40">&copy; {new Date().getFullYear()} {contact.name}. All rights reserved.</p>
        
        <div className="flex items-center gap-x-5">
          {socials.map(({ title, link, Icon }) => (
            <Link
              key={title}
              href={link}
              className="font-medium flex items-center gap-x-1 transition-all hover:underline"
            >
              <Icon className="size-4 fill-white/50" />
              {title}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
