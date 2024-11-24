"use client";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState,useEffect } from "react";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";
import fonts from "../../../fonts";


// import "./Navbar.scss";

interface NavLink {
    href: string;
    label: string;
    ariaLabel: string;
    isButton?: boolean;
}

// Array of navigation link objects
const navLinks: NavLink[] = [
    { href: "/", label: "HOME", ariaLabel: "Home" },
    { href: "/about", label: "ABOUT", ariaLabel: "About" },
    { href: "/mywork", label: "MY WORK", ariaLabel: "My Work" },
    { href: "/blog", label: "BLOG", ariaLabel: "Blog" },
    { href: "/contact", label: "CONTACT", ariaLabel: "Contact" },
    { href: "#", label: "BOOK A CALL", ariaLabel: "Book a Call", isButton: true },
];

const Navbar = ({ className = "Navbar" }) => {
    const classList = classNames(className);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => {
        setIsMenuOpen((prevState) => !prevState);
    };

    // Handle scroll event to change navbar background
    useEffect(()=>{
        const handleScroll = () =>{
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () =>{
            window.removeEventListener("scroll", handleScroll)
        };
    }, []);

    return <div data-cy="Navbar" className={classList}>
        <div className={`nav-wrapper fixed top-0 left-0 w-full z-[1000] px-4 xl:px-0 transition-colors duration-300 ${pathname === "/" && isScrolled ? "bg-black/75" : pathname !== "/" ? "bg-black/75" : "bg-transparent"}`}>
            <nav className="navbar h-[90px] flex flex-row justify-center items-center max-w-[1200px] mx-auto">
                {/* Company logo */}
                <div className="navbar__logo mr-auto hidden lg:block">
                    <Link
                        href="/"
                        aria-label="Homepage"
                        className={`${fonts.productSansBold.className} text-2xl tracking-[20%] font-bold text-pwV2White`}
                    >
                        PAULETTE WATSON
                    </Link>
                </div>
                <div className="navbar__logo mr-auto block lg:hidden">
                    <Link
                        href="/"
                        aria-label="Homepage"
                        className="text-2xl font-bold text-pwV2White"
                    >
                        P W
                    </Link>
                </div>

                {/* Dynamic Navigation items */}
                <ul className="navbar__menu hidden md:flex gap-x-6 lg:gap-x-8 items-center text-pwV2White">
                    {navLinks.map((link, index) => (
                        <li
                            key={index}
                            className={`navbar__item ${link.isButton ? "navbar__item--cta" : ""
                                }`}
                        >
                            {link.isButton ? (
                                <button
                                    className={`${fonts.montserrat.className} navbar__cta-button text-pwV2Font16 font-bold py-3 px-2 bg-[#000000] bg-opacity-[49%]`}
                                    aria-label={link.ariaLabel}
                                >
                                    {link.label}
                                </button>
                            ) : (
                                <Link
                                    href={link.href}
                                    aria-label={link.ariaLabel}
                                    className={`${fonts.montserrat.className} ${pathname === link.href ? "font-bold" : ""} text-pwV2Font16`}
                                >
                                    {link.label}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Mobile menu toggle button */}
                <div
                    className="hamburger block md:hidden cursor-pointer"
                    onClick={toggleMenu}
                >
                    <Image
                        src="/Navbar/Menu_Dropdown.png"
                        width={44}
                        height={44}
                        alt="Menu"
                    />
                </div>

                {/* Mobile menu (only visible when menu is open) */}
                {isMenuOpen && (
                    <div className="navbar__menu-mobile flex flex-col gap-y-12 px-20 pt-16 pb-11 lg:hidden fixed top-0 right-0 w-full h-full bg-pwV2DarkGreen z-40 text-right border border-pwV2LimeGreen">
                        {/* Close button */}
                        <div
                            className="absolute top-4 right-4 cursor-pointer"
                            onClick={toggleMenu}
                        >
                            <Image
                                src="/Navbar/close.png"
                                width={22}
                                height={22}
                                alt="Close"
                            />
                        </div>
                        {navLinks.map((link, index) => (
                            <li
                                key={index}
                                className={`navbar__item ${link.isButton ? "navbar__item--cta" : ""
                                    } list-none`}
                            >
                                {link.isButton ? (
                                    <button
                                        className={`${fonts.montserrat.className} navbar__cta-button text-pwV2Font20 font-bold text-pwV2White cursor-pointer`}
                                        aria-label={link.ariaLabel}
                                    >
                                        {link.label}
                                    </button>
                                ) : (
                                    <Link
                                        href={link.href}
                                        aria-label={link.ariaLabel}
                                        className={`${fonts.montserrat.className} cursor-pointer text-pwV2Font20 font-normal text-pwV2White hover:text-pwV2LimeGreen active:text-pwV2LimeGreen focus:text-pwV2LimeGreen`}
                                        onClick={toggleMenu} // Close menu on link click
                                    >
                                        {link.label}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </div>
                )}
            </nav>
        </div>
    </div>
};

export default Navbar;



