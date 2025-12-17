"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "home", href: "#" },
  { label: "About us", href: "#" },
  { label: "Academics", href: "#" },
  { label: "Campus Life", href: "#" },
  { label: "Professional Activities", href: "#" },
  { label: "Careers", href: "#" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  function handleMenu(params) {
    setOpen((pre) => !pre);
  }

  return (
    <nav className="relative">
      <div className="container mx-auto max-w-screen-xl flex py-4 items-center justify-between px-4">
        <Link href="/" className="text-3xl text-primary">
          Logo
        </Link>
        <div className=" items-center gap-12 hidden lg:flex">
          {navLinks.map((link) => (
            <ul
              key={link.label}
              className={"text-black  hover:text-opacity-70"}
            >
              <Link href="#" className="text-sm  hover:text-primary">
                {link.label}
              </Link>
            </ul>
          ))}
        </div>
        <div className="hidden lg:block rounded-full px-1 py-1 space-x-2 bg-primary-background">
          <button className="px-6 text-center py-2  text-xs bg-white rounded-full">
            Admission
          </button>
          <button className="text-black px-5 py-2 text-center text-xs">
            Apply
          </button>
        </div>

        {open ? (
          <button onClick={handleMenu} className="block lg:hidden">
            <Image
              src={"/icons/close.png"}
              height={40}
              width={40}
              className="object-cover"
              alt={"icon"}
            />
          </button>
        ) : (
          <button onClick={handleMenu} className="block lg:hidden">
            <Image
              src={"/icons/menu.png"}
              height={40}
              width={40}
              className="object-cover"
              alt={"icon"}
            />
          </button>
        )}
        <div
          className={`lg:hidden absolute z-10 left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out
        ${
          open
            ? "top-full opacity-100 "
            : "top-[90%] opacity-0 pointer-events-none"
        }`}
        >
          <div className="flex flex-col gap-6 px-6 py-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base text-black hover:text-primary"
              >
                {link.label}
              </Link>
            ))}

            <div className="flex flex-col gap-3 pt-4">
              <button
                onClick={() => setOpen(false)}
                className="w-full py-3 text-sm bg-primary-background text-black rounded-full"
              >
                Admission
              </button>
              <button
                onClick={() => setOpen(false)}
                className="w-full py-3 text-sm border rounded-full"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
