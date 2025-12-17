"use client";

import Image from "next/image";
import React, { useState } from "react";

const faq = [
  {
    id: 1,
    title: "Lorem ipsum odor amet, consectetuer adipiscing elit.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, ",
  },
  {
    id: 2,
    title: "Lorem ipsum odor amet, consectetuer adipiscing elit.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, ",
  },
  {
    id: 3,
    title: "Lorem ipsum odor amet, consectetuer adipiscing elit.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, ",
  },
  {
    id: 4,
    title: "Lorem ipsum odor amet, consectetuer adipiscing elit.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, ",
  },
  {
    id: 5,
    title: "Lorem ipsum odor amet, consectetuer adipiscing elit.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, ",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState(1);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };
  return (
    <section className="mx-auto max-w-screen-lg px-4 md:pt-12 flex justify-center items-center flex-col gap-4 md:gap-16">
      <h2 className="font-marcellus text-center">Frequently Asked Questions</h2>
      <ul className="flex flex-col gap-2 md:gap-4 w-full">
        {faq.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div key={item.id} className="">
              <button
                onClick={() => toggle(item.id)}
                className={`z-10 relative gap-3 transition-colors ${
                  isOpen ? "bg-secondary-background" : "bg-[#EDEDED]"
                }  py-3 px-5 md:px-6 flex justify-between items-center rounded-xl w-full `}
              >
                <h4
                  className={`text-sm md:text-lg text-left ${
                    isOpen ? "text-white" : "text-text-secondary"
                  } `}
                >
                  {item.title}
                </h4>
                {isOpen ? (
                  <Image
                    src={"/icons/up-arrow-icon.svg"}
                    height={13}
                    width={13}
                    alt="icon"
                  />
                ) : (
                  <Image
                    src={"/icons/down-arrow-icon.svg"}
                    height={13}
                    width={13}
                    alt="icon"
                  />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all -translate-y-2 duration-300 mx-0.5 bg-[#EDEDED] rounded-b-[20px] px-4 md:px-6 ${
                  isOpen ? "max-h-48 py-7 md:py-9" : "max-h-0 py-0"
                }`}
              >
                <p className="text-xs sm:text-sm text-text-secondary -translate-y-2">
                  {item.content}
                </p>
              </div>
            </div>
          );
        })}
      </ul>
    </section>
  );
}
