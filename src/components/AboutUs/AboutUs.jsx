"use client";

import React, { useEffect, useRef, useState } from "react";
import "./AboutUs.css";
import Image from "next/image";

const tabList = [
  {
    id: 1,
    tabTitle: "Publication details",
    title: "Publication details",
    content: [
      "University Research Fellowship Award (2002) – University of Madras, Chennai, India.",
      "Senior Research Fellowship Award (2003 & 2004) – Council of Scientific and Industrial Research (CSIR), Government of India, New Delhi, India.",
      "Post-Doctoral Fellowship (2005) – Department of Physiology & Biophysics, University of Calgary, Calgary, AB, Canada.",
      "Best Post-Doctoral Trainee Award (2006) – Department of Physiology & Biophysics, University of Calgary, Calgary, AB, Canada.",
      "Travel Award (2007) – Canadian Institutes of Health Research (CIHR), Training Program in Genetics, Child Development and Health (TPGCDH), University of Calgary, Calgary, AB, Canada.",
      "Post-Doctoral Fellowship Award (2007 & 2008) – CIHR-TPGCDH, University of Calgary, Calgary, AB, Canada.",
      "Child Health Research Travel Grant (2008) – Institute of Child and Maternal Health (ICMH) and Alberta Children’s Hospital (ACH), Calgary Health Region (CHR), Calgary, AB, Canada.",
      "Travel Award (2008) – CIHR-TPGCDH, University of Calgary, Calgary, AB, Canada, and CIHR-Institute of Human Development, Child and Youth Health (IHDCYH), Ottawa, QC, Canada.",
      "Bechtel Estate Best Post-Doctoral Fellow Award (2009) – Institute of Child and Maternal Health (ICMH), University of Calgary, Calgary, AB, Canada.",
      "Dr. A. P. J. Abdul Kalam Best Teacher Award (2023) – Chettinad Academy of Research & Education, Kelambakkam, Chennai, Tamil Nadu, India.",
      "Appreciation for Academic Excellence and Contribution to Academia (2023) – New Normal Education Leadership Summit, Chennai, awarded by LinkedIn and ArdorComm Group, New Delhi, India.",
    ],
  },
  {
    id: 2,
    tabTitle: "Awards and Achievements",
    title: "HONORS / AWARDS",
    content: [
      "University Research Fellowship Award (2002) – University of Madras, Chennai, India.",
      "Senior Research Fellowship Award (2003 & 2004) – Council of Scientific and Industrial Research (CSIR), Government of India, New Delhi, India.",
      "Post-Doctoral Fellowship (2005) – Department of Physiology & Biophysics, University of Calgary, Calgary, AB, Canada.",
      "Best Post-Doctoral Trainee Award (2006) – Department of Physiology & Biophysics, University of Calgary, Calgary, AB, Canada.",
      "Travel Award (2007) – Canadian Institutes of Health Research (CIHR), Training Program in Genetics, Child Development and Health (TPGCDH), University of Calgary, Calgary, AB, Canada.",
      "Post-Doctoral Fellowship Award (2007 & 2008) – CIHR-TPGCDH, University of Calgary, Calgary, AB, Canada.",
      "Child Health Research Travel Grant (2008) – Institute of Child and Maternal Health (ICMH) and Alberta Children’s Hospital (ACH), Calgary Health Region (CHR), Calgary, AB, Canada.",
      "Travel Award (2008) – CIHR-TPGCDH, University of Calgary, Calgary, AB, Canada, and CIHR-Institute of Human Development, Child and Youth Health (IHDCYH), Ottawa, QC, Canada.",
      "Bechtel Estate Best Post-Doctoral Fellow Award (2009) – Institute of Child and Maternal Health (ICMH), University of Calgary, Calgary, AB, Canada.",
    ],
  },
  {
    id: 3,
    tabTitle: "Workshops / Seminars",
    title: "Workshops / Seminars",
    content: [
      "University Research Fellowship Award (2002) – University of Madras, Chennai, India.",
      "Senior Research Fellowship Award (2003 & 2004) – Council of Scientific and Industrial Research (CSIR), Government of India, New Delhi, India.",
      "Post-Doctoral Fellowship (2005) – Department of Physiology & Biophysics, University of Calgary, Calgary, AB, Canada.",
      "Best Post-Doctoral Trainee Award (2006) – Department of Physiology & Biophysics, University of Calgary, Calgary, AB, Canada.",
      "Travel Award (2007) – Canadian Institutes of Health Research (CIHR), Training Program in Genetics, Child Development and Health (TPGCDH), University of Calgary, Calgary, AB, Canada.",
      "Post-Doctoral Fellowship Award (2007 & 2008) – CIHR-TPGCDH, University of Calgary, Calgary, AB, Canada.",
      "Child Health Research Travel Grant (2008) – Institute of Child and Maternal Health (ICMH) and Alberta Children’s Hospital (ACH), Calgary Health Region (CHR), Calgary, AB, Canada.",
      "Travel Award (2008) – CIHR-TPGCDH, University of Calgary, Calgary, AB, Canada, and CIHR-Institute of Human Development, Child and Youth Health (IHDCYH), Ottawa, QC, Canada.",
      "Bechtel Estate Best Post-Doctoral Fellow Award (2009) – Institute of Child and Maternal Health (ICMH), University of Calgary, Calgary, AB, Canada.",
      "Dr. A. P. J. Abdul Kalam Best Teacher Award (2023) – Chettinad Academy of Research & Education, Kelambakkam, Chennai, Tamil Nadu, India.",
      "Appreciation for Academic Excellence and Contribution to Academia (2023) – New Normal Education Leadership Summit, Chennai, awarded by LinkedIn and ArdorComm Group, New Delhi, India.",
    ],
  },
  {
    id: 4,
    tabTitle: "Work Experience",
    title: "Work Experience",
    content: [
      "University Research Fellowship Award (2002) – University of Madras, Chennai, India.",
      "Senior Research Fellowship Award (2003 & 2004) – Council of Scientific and Industrial Research (CSIR), Government of India, New Delhi, India.",
      "Post-Doctoral Fellowship (2005) – Department of Physiology & Biophysics, University of Calgary, Calgary, AB, Canada.",
      "Best Post-Doctoral Trainee Award (2006) – Department of Physiology & Biophysics, University of Calgary, Calgary, AB, Canada.",
      "Travel Award (2007) – Canadian Institutes of Health Research (CIHR), Training Program in Genetics, Child Development and Health (TPGCDH), University of Calgary, Calgary, AB, Canada.",
      "Post-Doctoral Fellowship Award (2007 & 2008) – CIHR-TPGCDH, University of Calgary, Calgary, AB, Canada.",
      "Child Health Research Travel Grant (2008) – Institute of Child and Maternal Health (ICMH) and Alberta Children’s Hospital (ACH), Calgary Health Region (CHR), Calgary, AB, Canada.",
      "Travel Award (2008) – CIHR-TPGCDH, University of Calgary, Calgary, AB, Canada, and CIHR-Institute of Human Development, Child and Youth Health (IHDCYH), Ottawa, QC, Canada.",
      "Bechtel Estate Best Post-Doctoral Fellow Award (2009) – Institute of Child and Maternal Health (ICMH), University of Calgary, Calgary, AB, Canada.",
      "Dr. A. P. J. Abdul Kalam Best Teacher Award (2023) – Chettinad Academy of Research & Education, Kelambakkam, Chennai, Tamil Nadu, India.",
      "Appreciation for Academic Excellence and Contribution to Academia (2023) – New Normal Education Leadership Summit, Chennai, awarded by LinkedIn and ArdorComm Group, New Delhi, India.",
    ],
  },
];

export default function AboutUs() {
  const scrollRef = useRef(null);
  const tabRefs = useRef({});
  const [tab, setTab] = useState(1);
  const isFirstRender = useRef(true);

  const scrollToTab = (tabId) => {
    const el = tabRefs.current[tabId];
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  };

  const moveLeft = () => {
    setTab((prev) => {
      const nextTab = prev === 1 ? tabList.length : prev - 1;
      scrollToTab(nextTab);
      return nextTab;
    });
  };

  const moveRight = () => {
    setTab((prev) => {
      const nextTab = prev === tabList.length ? 1 : prev + 1;
      scrollToTab(nextTab);
      return nextTab;
    });
  };

  return (
    <section className="w-full bg-[#FFF4B1] px-4 py-16">
      <div className="mx-auto max-w-screen-xl p-8 space-y-6 bg-white w-full rounded-[20px]">
        <div className="w-full flex items-center gap-2">
          <button
            onClick={moveLeft}
            className="p-2 rounded-full hover:bg-gray-50"
          >
            <Image
              src={"/icons/right-icon.png"}
              height={22}
              width={22}
              alt="icon"
              className="rotate-180"
            />
          </button>
          <div
            ref={scrollRef}
            className="space-x-2 w-full overflow-x-auto flex justify-between items-center whitespace-nowrap no-scrollbar"
          >
            {tabList.map((item) => {
              const isOpen = tab === item.id;
              return (
                <button
                  ref={(el) => (tabRefs.current[item.id] = el)}
                  key={item.id}
                  className={`${
                    isOpen
                      ? "bg-secondary-background text-white"
                      : "bg-gray-50 text-black"
                  } text-lg md:text-2xl py-2 px-5 md:px-7 rounded-3xl font-marcellus`}
                  onClick={() => {
                    setTab(item.id);
                  }}
                >
                  {item.tabTitle}
                </button>
              );
            })}
          </div>
          <button
            onClick={moveRight}
            className="p-2 rounded-full hover:bg-gray-50"
          >
            <Image
              src={"/icons/right-icon.png"}
              height={22}
              width={22}
              alt="icon"
            />
          </button>
        </div>
        <div>
          <h3 className="text-2xl md:text-3xl font-marcellus">
            {tabList[tab - 1].title}
          </h3>
          <div className="about-us-points-container h-[422px] overflow-y-auto">
            <ol className="list-decimal pl-6 mb-4 space-y-2 mt-5">
              {tabList[tab - 1]?.content.map((item, index) => (
                <li key={index} className="text-[#515151] text-sm md:text-base">
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
