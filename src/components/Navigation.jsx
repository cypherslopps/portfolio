import PropTypes from "prop-types";
import { useEffect, useState } from "react"
import { navigationLinks, socials } from "../lib/constants";
import Hamburger from "./Hamburger";

const NavigationLink = ({ title, route }) => {
    const [activeLink, setActiveLink] = useState(navigationLinks[0].route);

    const scrollToContainer = (route) => {
        const container = document.querySelector(route);
        container.scrollTo({ behavior: 'scroll' });
        setActiveLink(route)
    }

    return (
        <li key={title}>
            <a
                href={route}
                onClick={() => scrollToContainer(route)}
                className={`${route === activeLink ? "text-white font-semibold" : "text-gray-400"} text-sm`}
            >
                {title}
            </a>
        </li>
    )
}

NavigationLink.propTypes = {
    title: PropTypes.string,
    route: PropTypes.string
}

const Navigation = () => {
    const [isFixed, setIsFixed] = useState(false);
    const [isOffsetOpen, setIsOffsetOpen] = useState(false);

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 250) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        }

        window.addEventListener("scroll", handleScroll);
    
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleOffset = () => {
        setIsOffsetOpen(prev => !prev)
    }

    return (
        <nav className={`${isFixed ? "fixed top-0 left-0 z-30 bg-white/10 backdrop-blur-xl py-4" : "relative py-3"} px-6 flex items-center justify-between w-full transition-all duration-200`}>
            <div className={`${isFixed ? "w-11 h-11 text-lg" : "w-10 h-10 text-base"} transition-all duration-200 rounded-full font-extrabold flex items-center justify-center bg-white/90 text-black`}>
                JEI
            </div>
            
            <ul className="hidden md:flex md:items-center md:justify-center md:gap-x-12">
                {navigationLinks.map(link => (
                    <NavigationLink 
                        key={link.title}
                        {...link}
                    />
                ))}
            </ul>

            <div className="flex items-center gap-x-4">
                <ul className="flex items-center gap-x-4">
                    {socials.map(({ title, route }) => (
                        <a
                            key={title}
                            href={route}
                            className="w-5 h-5 flex rounded-full bg-red-300"
                        >
                            <span className="sr-only">{title}</span>
                        </a>
                    ))}
                </ul>

                {/* Hamburger */}
                <Hamburger 
                    isOffsetOpen={isOffsetOpen}
                    toggleOffset={toggleOffset}
                />
            </div>
        </nav>
    )
}

export default Navigation