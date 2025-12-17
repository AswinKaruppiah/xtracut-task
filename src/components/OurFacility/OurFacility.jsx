"use client";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { LeftArrow, RightArrow } from "../../../utils/icon";
import Image from "next/image";

const slideData = [
  {
    id: 1,
    title: "Central Library",
    description: "Student in lab coat studying in library setting",
    image: "/images/Group 1000002028.png",
  },
  {
    id: 2,
    title: "Central Library",
    description: "Students in lab coats in classroom setting",
    image: "/images/Group 1000002029.png",
  },
  {
    id: 3,
    title: "Central Library",
    description: "Student conducting experiment in laboratory",
    image: "/images/Group 1000002030.png",
  },
  {
    id: 4,
    title: "Central Library",
    description: "Students in medical scrubs walking on campus",
    image: "/images/Group 1000002031.png",
  },
  {
    id: 5,
    title: "Central Library",
    description: "Students in medical scrubs walking on campus",
    image: "/images/Group 1000002031.png",
  },
];

export default function OurFacility() {
  const containerRef = useRef(null);
  const cardRefs = useRef({});
  const [activeIndex, setActiveIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const CARD_WIDTH = 313;
  const GAP = 16;

  useEffect(() => {
    if (!containerRef.current) return;

    setContainerWidth(containerRef.current.parentElement.offsetWidth);

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === slideData.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const CARD_FULL_WIDTH = CARD_WIDTH + GAP;
  const totalWidth = slideData.length * CARD_FULL_WIDTH - GAP;

  const rawTranslate =
    activeIndex * CARD_FULL_WIDTH - (containerWidth / 2 - CARD_WIDTH / 2);

  const maxTranslate = Math.max(0, totalWidth - containerWidth);

  const translateX = containerRef.current
    ? Math.min(Math.max(rawTranslate, 0), maxTranslate)
    : 0;

  const moveRight = () => {
    setActiveIndex((prev) => (prev === slideData.length - 1 ? 0 : prev + 1));
  };

  const moveLeft = () => {
    setActiveIndex((prev) => (prev === 0 ? slideData.length - 1 : prev - 1));
  };

  return (
    <section className="w-full bg-gradient-to-l overflow-hidden from-[#0066A9] to-[#003C65] px-4 pt-10 md:pt-20 pb-6 md:pb-24">
      <div className="mx-auto max-w-screen-xl flex flex-col w-full items-center">
        <div className="bg-white mb-4 md:mb-8 rounded-full py-2 px-5 flex items-center gap-2 justify-center border-[#DBDBDB]">
          <div className=" aspect-square h-2 rounded-full bg-[#3C9E53]"></div>
          <h6>Our Facility</h6>
        </div>
        <h2 className="font-marcellus mb-4 text-center md:mb-10 text-white">
          Empowering Future Healthcare Professionals
        </h2>
        <div className="flex gap-2 w-full justify-end mb-4">
          <button
            className="p-3 md:p-3 rounded-full text-black hover:text-white bg-white hover:bg-primary-background swiper-button-next-custom"
            onClick={moveLeft}
          >
            <RightArrow />
          </button>
          <button
            className="p-3 rounded-full text-black hover:text-white bg-white hover:bg-primary-background swiper-button-prev-custom"
            onClick={moveRight}
          >
            <LeftArrow />
          </button>
        </div>

        <div className="relative w-full">
          <div
            ref={containerRef}
            className={`flex gap-[16px] transition-transform duration-500 ease-out`}
            style={{
              transform: `translateX(-${translateX}px)`,
            }}
          >
            {slideData.map((item, index) => (
              <div
                key={item.id}
                className={`shrink-0 relative overflow-hidden flex items-end py-4
                            w-[313px] h-[335px] rounded-xl bg-white`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={`object-cover transition-transform duration-500
            ${activeIndex === index ? "scale-105" : "scale-100"}`}
                />

                {/* Title + lines */}
                <div className="relative z-10 gap-2 w-full flex items-center justify-center overflow-hidden">
                  <div className="w-12 overflow-hidden">
                    <div
                      className={`h-[1px] w-full bg-primary-background transition-transform duration-500
                ${
                  activeIndex === index ? "translate-x-0" : "-translate-x-full"
                }`}
                    />
                  </div>

                  <h6 className="text-white font-marcellus text-lg whitespace-nowrap">
                    {item.title}
                  </h6>

                  <div className="flex-1 overflow-hidden">
                    <div
                      className={`h-[1px] w-full bg-primary-background transition-transform duration-500
                ${
                  activeIndex === index ? "translate-x-0" : "translate-x-full"
                }`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
