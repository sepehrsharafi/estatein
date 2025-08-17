"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Button from "../button";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/listings", label: "Properties" },
    { href: "/services", label: "Services" },
  ];

  return (
    <>
      <div className=" h-[68px] md:h-[77px]  2xl:h-[100px]"></div>
      <nav className="md:hidden w-full fixed top-0 h-[68px] bg-[#1A1A1A] px-4 py-5 flex justify-between items-center z-40 ">
        <Image
          src={"/images/logo/logo.png"}
          alt="logo"
          width={93}
          height={28}
        />
        <button
          onClick={() => {
            setMenu(!menu);
          }}
        >
          {menu ? (
            <Image
              src={"/icons/hamburger-menu-close.svg"}
              alt="menu"
              width={28}
              height={28}
              className="transition-all"
            />
          ) : (
            <Image
              src={"/icons/hamburger-menu.svg"}
              alt="menu"
              width={28}
              height={28}
              className="transition-all"
            />
          )}
        </button>
      </nav>

      <div
        className={`fixed md:hidden rounded-xl top-[68px] left-0 h-screen w-3/4 flex flex-col  items-end bg-[#141414] z-30 transform transition-transform duration-300 ease-in-out ${
          menu ? "translate-x-0 " : "-translate-x-full"
        }`}
      >
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={` px-8 py-4 w-full flex-row flex  border-gray-800 ${
                isActive ? "font-bold  text-[#703BF7]" : "text-white"
              }`}
            >
              {link.label}
            </Link>
          );
        })}

        <Link
          className={` px-8 py-4 w-full flex-row flex  border-gray-800 ${
            pathname === "/contact" ? "font-bold  text-[#703BF7]" : "text-white"
          }`}
          href={"/contact"}
        >
          Contact Us
        </Link>
      </div>

      <nav className="hidden md:flex w-full px-20 2xl:px-40 2xl:py-5 py-3.5 bg-[#1A1A1A] fixed top-0 z-40  flex-row justify-between items-center">
        <div className="flex flex-row justify-between items-center container mx-auto">
          <div className="relative w-[112px] h-[34px] 2xl:w-[160px] 2xl:h-[48px]">
            <Image
              src={"/images/logo/logo.png"}
              alt="logo"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="flex flex-row gap-6 ">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`  ${
                    isActive
                      ? "   bg-[#141414] text-white py-[12px] px-[20px] 2xl:px-[24px] 2xl:py-[12px] 2xl:text-lg rounded-[8px]  border-[#262626] border-[1px] hover:bg-[#292929]"
                      : "text-white py-[12px] px-2 rounded-[8px] hover:bg-[#292929] 2xl:px-[24px] 2xl:py-[12px] 2xl:text-lg"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          <Link href={"/contact"}>
            <Button variant="secondary">Contact Us</Button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
