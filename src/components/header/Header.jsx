"use client";

import Link from "next/link";

const navLinks = [
  { label: "home", href: "#" },
  { label: "About us", href: "#" },
  { label: "Academics", href: "#" },
  { label: "Campus Life", href: "#" },
  { label: "Professional Activities", href: "#" },
  { label: "Careers", href: "#" },
];

const Navbar = () => {
  return (
    <nav>
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
        <div className="rounded-full px-1 py-1 space-x-2 bg-primary-background">
          <button className="px-6 text-center py-2  text-xs bg-white rounded-full">
            Admission
          </button>
          <button className="text-black px-5 py-2 text-center text-xs">
            Apply
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
