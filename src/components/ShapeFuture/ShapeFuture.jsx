import React from "react";
import Button from "../core/Button";

const cardData = [
  {
    id: 1,
    title: "Teaching",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lorem.",
  },
  {
    id: 2,
    title: "Non-Teaching",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem",
  },
];

export default function ShapeFuture() {
  return (
    <section className="px-4 pt-16 mx-auto max-w-screen-xl">
      <div className="flex flex-col w-full items-center justify-center gap-16">
        <h2 className="font-marcellus">
          Shape The Future Of Healthcare Education
        </h2>

        <div className="mx-auto flex w-full max-w-screen-lg flex-col gap-8 md:flex-row md:justify-center">
          {cardData.map((item) => (
            <div
              key={item.id}
              className="flex-1 h-fit rounded-[20px] border-[1.5px] border-[#E3E3E3] bg-[#F0F0F0] p-8"
            >
              <h3 className="mb-3 text-3xl font-marcellus">{item.title}</h3>
              <p className="mb-6 text-sm opacity-80">{item.description}</p>
              <Button />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
