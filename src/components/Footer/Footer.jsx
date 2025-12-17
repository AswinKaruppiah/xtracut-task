import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative px-4">
      <Image
        fill
        src={"/images/footer-image.png"}
        alt="footer-banner"
        objectFit="cover"
      />
      <div className="mx-auto relative z-10 max-w-screen-xl py-7 md:py-12 grid gap-8 md:grid-cols-12">
        <div className="text-white w-full col-span-3">
          <div className="relative max-w-[202px]">
            <Image
              src="/images/badge-image.png"
              width={202}
              height={150}
              alt="badge"
              className="w-full h-auto"
              quality={100}
            />

            <h3
              className="absolute inset-0 flex items-center justify-center
                text-3xl md:text-5xl font-marcellus text-black mb-5"
            >
              Logo
            </h3>
          </div>

          <p className="text-sm mt-4 font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut
          </p>

          <h5 className="mb-3 text-lg md:text-xl mt-6 font-marcellus">
            Follow us
          </h5>
          <div className="flex gap-8">
            <Link href="#">
              <Image
                src="/icons/fb-icon.png"
                width={12}
                height={12}
                alt="icon"
                className="shrink-0"
              />
            </Link>
            <Link href="#">
              <Image
                src="/icons/insta-icon.png"
                width={22}
                height={22}
                alt="icon"
                className="shrink-0"
              />
            </Link>
            <Link href="#">
              <Image
                src="/icons/linkedIn-icon.png"
                width={22}
                height={22}
                alt="icon"
                className="shrink-0"
              />
            </Link>
            <Link href="#">
              <Image
                src="/icons/x-icon.png"
                width={24}
                height={22}
                alt="icon"
                className="shrink-0"
              />
            </Link>
            <Link href="#">
              <Image
                src="/icons/yt-icon.png"
                width={26}
                height={26}
                alt="icon"
                className="shrink-0"
              />
            </Link>
          </div>
        </div>
        <div className="text-white col-span-2">
          <h4 className="mb-4 text-2xl md:text-3xl font-marcellus">
            Quick Link
          </h4>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-sm hover:text-accent">
                Admissions
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm hover:text-accent">
                Campus Life
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm hover:text-accent">
                Placements
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm hover:text-accent">
                Academics
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm hover:text-accent">
                Careers
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-white col-span-3">
          <h4 className="mb-4 text-2xl md:text-3xl font-marcellus">
            Academics
          </h4>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-sm hover:text-accent">
                Bachelor of Physiotherapy
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm hover:text-accent">
                Master of Physiotherapy
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm hover:text-accent">
                Bachelor of Occupational Therapy
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm hover:text-accent">
                Master of Occupational Therapy
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm hover:text-accent">
                Master of Science
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-white col-span-4">
          <h4 className="mb-4 text-2xl md:text-3xl font-marcellus">
            Contact us
          </h4>
          <ul className="space-y-2">
            <li className="flex items-start gap-3">
              <Image
                src="/icons/map-icon.png"
                width={18}
                height={18}
                alt="location"
                className="mt-1 shrink-0"
              />
              <address className="not-italic text-sm leading-relaxed">
                Lorem ipsum odor amet, consectetuer adipiscing elit. Hac arcu
                primis hac in senectus sit penatibus. Efficitur rutrum
                pellentesque
              </address>
            </li>
            <li className="flex items-center gap-3">
              <Image
                src="/icons/mail-icon.png"
                width={20}
                height={20}
                alt="mail"
                className="shrink-0 mt-1"
              />
              <span>college@gmail.com</span>
            </li>
            <li className="flex items-start gap-3">
              <Image
                src="/icons/call-icon.png"
                width={18}
                height={18}
                alt="call"
                className="mt-1 shrink-0"
              />
              000-000-000
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-screen-lg bg-white mx-auto px-6 py-2 md:py-3 z-10 relative footer-bar">
        <p className="text-center text-xs md:text-sm">
          College © 2025 - All Right Reserved | Designed & Developed by Xtracut
        </p>
      </div>
    </footer>
  );
}
