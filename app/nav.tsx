"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Nav({
  endpoints,
}: // translations,
{
  endpoints: ["About", "Methods", "Testamonials", "Contact", "Team"];
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
    <header className="relative w-full flex justify-start items-center gap-4 mb-10 border-b-2 border-solid border-[#4285f4]">
      <div
        aria-hidden="false"
        className="flex justify-center items-center max-w-5xl"
      >
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
        <Link href={`/`}>
          <h1 className="text-2xl text-[#003587] font-serif">
            Treatment Companion
          </h1>
        </Link>
      </div>
      <button
        id="mobile-nav-button"
        onClick={toggleMenu}
        className="flex items-center justify-end w-10 h-10 rounded-md border-2 border-solid border-[#4285f4] ring-offset-2 ring-[#3E7FF3] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3E7FF3] lg:hidden mr-4"
      >
        <span
          className={`block w-6 h-0.5 bg-[#4285f4] transition-all duration-300 ${
            isOpen ? "transform rotate-45" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-[#4285f4] mt-1.5 mb-1.5 transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-[#4285f4] transition-all duration-300 ${
            isOpen ? "transform -rotate-45" : ""
          }`}
        ></span>
      </button>

      {/* Mobile navigation menu */}
      <nav
        id="mobile-nav"
        className={`absolute z-10 transition-all duration-300 p-4 top-full right-0 mt-2 w-3/4  shadow-lg lg:hidden bg-[#4285f4] rounded-md text-[#cce0ffe5] ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex justify-end items-end ">
          <ul className="flex flex-col justify-end items-end">
            {endpoints.map((endpoint) => {
              return (
                <li
                  key={endpoint}
                  className="block px-4 py-2 hover:bg-gray-200 active:text-red-400"
                >
                  <Link
                    href={`/${endpoint.toLowerCase()}`}
                    onClick={toggleMenu}
                    className={`text-2xl  active:text-red-400`}
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
        {endpoints.map((endpoint) => {
          return (
            <Link
              key={endpoint}
              href={`/${endpoint.toLowerCase()}`}
              className={`text-2xl text-[#003587]  active:text-red-400`}
            >
              {/* {translations[endpoint]} */}
              {endpoint}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
