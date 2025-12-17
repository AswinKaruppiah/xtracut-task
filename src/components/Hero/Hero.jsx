import Image from "next/image";
import React from "react";

export function Hero() {
  return (
    <section className="relative h-[400px] mx-auto max-w-screen-2xl m px-2 sm:px-4">
      <div className="relative h-full w-full rounded-[20px] p-5 sm:p-10 md:p-16 overflow-hidden">
        <Image
          fill
          src={"/images/hero-banner.png"}
          alt="banner"
          objectFit="cover"
        />
        <div className="relative flex justify-end  w-full gap-4 md:gap-8 flex-col h-full">
          <h1 className="text-5xl md:text-6xl font-marcellus text-white">
            Careers
          </h1>
          <div className="bg-white rounded-full py-2 md:py-3 flex items-center justify-center w-fit gap-2 px-6 md:px-8">
            <h6>HOME</h6>
            <div className="h-2.5 rounded-full bg-primary-background aspect-square"></div>
            <h6>CAREERS</h6>
          </div>
        </div>
      </div>
    </section>
  );
}
