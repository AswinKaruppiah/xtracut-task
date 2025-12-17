import React from "react";
import Image from "next/image";
import Button from "../core/Button";

export default function WhyJoin() {
  return (
    <section className="px-4 py-6 mx-auto max-w-screen-xl">
      <div className="grid items-center grid-cols-1 gap-7 md:gap-14 md:grid-cols-5">
        <div className="relative col-span-1 md:col-span-2">
          <div className="relative w-full mx-auto max-w-[440px] aspect-square">
            <div className="absolute -bottom-3 -right-3  h-[98%] w-[98%] rounded-[20px] bg-[#0066FF] " />

            <Image
              src="/images/why-join.png"
              alt="Students walking on campus"
              fill
              className="object-cover rounded-[12px] relative z-10"
            />
          </div>
        </div>

        <div className="col-span-1 flex flex-col items-center md:items-start md:col-span-3">
          <h2 className="font-marcellus text-center mb-4 md:mb-7">
            Why Join Our College
          </h2>
          <p className="text-sm md:text-base font-light mb-3 md:mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt.
          </p>

          <p className="text-sm md:text-base font-light mb-4 md:mb-8">
            Ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore.
          </p>

          <Button text="Start Your Career" />
        </div>
      </div>
    </section>
  );
}
