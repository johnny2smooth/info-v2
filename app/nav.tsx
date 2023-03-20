"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Nav({
  endpoints,
}: // translations,
{
  endpoints: ["About", "Methods", "Testamonials", "Contact"];
  // translations: {
  //   about: string;
  //   practice: string;
  //   services: string;
  //   writing: string;
  // };
}) {
  const [isOpen, setIsOpen] = useState(false);
  // const pathName = usePathname();
  // const currentLocale = pathName?.split('/')[2];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (!event.target) return;
    if (event.target instanceof HTMLElement) {
      if (event.target.id === "mobile-nav-button") return setIsOpen(true);
      if (event.target.closest("#mobile-nav")) return;
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className="relative w-full flex justify-start items-center gap-4 mb-10">
      <div aria-hidden="false" className="flex justify-center items-center">
        <Link href={`/`} className={`s4 text-[#4969ed]`}>
          <Image
            src="/logo.png"
            alt="treatment companion"
            width={100}
            height={100}
          />
        </Link>
      </div>
      <div className="grow">
        <h1 className="text-4xl text-[#003587] font-serif">TB-TST+</h1>
      </div>
      <button
        id="mobile-nav-button"
        onClick={toggleMenu}
        className="flex items-center justify-end w-10 h-10 rounded-md border-2 border-solid border-[#003587] ring-offset-2 ring-[#3E7FF3] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3E7FF3] lg:hidden mr-4"
      >
        <span
          className={`block w-6 h-0.5 bg-[#003587] transition-all duration-300 ${
            isOpen ? "transform rotate-45" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-[#003587] mt-1.5 mb-1.5 transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-[#003587] transition-all duration-300 ${
            isOpen ? "transform -rotate-45" : ""
          }`}
        ></span>
      </button>

      {/* Mobile navigation menu */}
      <nav
        id="mobile-nav"
        className={`absolute z-10 transition-all duration-300 bg-[#3E7FF3] p-4 top-full left-0 mt-2 w-full border-white border-2 rounded-md shadow-lg lg:hidden ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex justify-around items-end ">
          <ul className="flex flex-wrap">
            {endpoints.map((endpoint) => {
              return (
                <li
                  key={endpoint}
                  className="block px-4 py-2 hover:bg-gray-200 active:text-red-400"
                >
                  <Link
                    href={`/${endpoint.toLowerCase()}`}
                    onClick={toggleMenu}
                    className={`text-xl text-white  active:text-red-400`}
                  >
                    {/* {translations[endpoint]} */}
                    {endpoint}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Desktop navigation menu */}
      <nav className="hidden space-x-4 lg:flex lg:items-center">
        <a href="#" className="px-4 py-2 hover:bg-gray-200 rounded-md">
          About
        </a>
        <a href="#" className="px-4 py-2 hover:bg-gray-200 rounded-md">
          Services
        </a>
        <a href="#" className="px-4 py-2 hover:bg-gray-200 rounded-md">
          Contact
        </a>
      </nav>
    </header>
  );
}
