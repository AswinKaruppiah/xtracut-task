import React from "react";

export default function ApplyNowBanner() {
  return (
    <section className="px-4 mx-auto max-w-screen-xl">
      <div className="bg-[#FFD812] px-8 py-12 w-full rounded-[20px]">
        <div className="flex flex-wrap gap-4 justify-between items-center">
          <div>
            <h2 className="font-marcellus">Shape the Future of Healthcare</h2>
            <h2 className="font-marcellus">Start Your Journey Today!</h2>

            <p className="mt-4 max-w-xl text-sm">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Hac arcu
              primis hac in senectus sit penatibus. Efficitur rutrum
              pellentesque
            </p>
          </div>

          <button className="bg-white py-2 md:py-3 text-base md:text-xl px-5 md:px-10 h-fit rounded-full">
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
}
