import Image from "next/image";
import React from "react";
import { RightTopArrow } from "../../../utils/icon";

export default function Button({ text = "Apply Now" }) {
  return (
    <button className="inline-flex items-center gap-3 rounded-full bg-[#FFD812] pr-1 pl-4 py-1">
      <span className="text-sm">{text}</span>
      <div className="flex h-7 w-7 p-1 text-black items-center justify-center rounded-full border bg-white text-xs">
        <RightTopArrow />
      </div>
    </button>
  );
}
