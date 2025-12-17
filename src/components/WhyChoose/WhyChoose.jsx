import React from "react";
import Image from "next/image";

const cardData = [
  {
    id: 1,
    title: "Advanced Laboratories & Facilities",
    description:
      "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore",
    icon: "/images/laboratories _facilities.png",
  },
  {
    id: 2,
    title: "Hands-On Clinical Training",
    description:
      "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore",
    icon: "/images/hands-on.png",
  },
  {
    id: 3,
    title: "Personalized Academic Mentorship",
    description:
      "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore",
    icon: "/images/personalized-academic-mentorship.png",
  },
  {
    id: 4,
    title: "Industry Internships",
    description:
      "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore",
    icon: "/images/industry-internships.png",
  },
];

export default function WhyChoose() {
  return (
    <section className="px-4 py-6 mx-auto max-w-screen-xl">
      <div className="flex flex-col w-full items-center justify-center">
        <div className="bg-[#F5F5F5] mb-8 rounded-full py-2 px-5 flex items-center gap-2 justify-center border-[#DBDBDB]">
          <div className=" aspect-square h-2 rounded-full bg-primary-background"></div>
          <h6>Why Choose </h6>
        </div>

        <h2 className="font-marcellus mb-16">
          Shape The Future Of Healthcare Education
        </h2>

        <div className="w-full max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-8 gap-4 items-center">
            <div className="flex flex-col gap-6 col-span-4 lg:col-span-3">
              {cardData.slice(0, 2).map((item) => (
                <InfoCard
                  key={item.id}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>

            <div
              className="relative hidden lg:block col-span-2 w-full h-full rounded-3xl 
                bg-gradient-to-b from-[#FFFAC9] to-[#FFF26A] 
                overflow-visible"
            >
              <div className="absolute bottom-0 left-1/2 w-full -translate-x-1/2 scale-105 origin-bottom">
                <Image
                  src="/images/nurse-img.png"
                  width={422}
                  height={400}
                  alt="nurse"
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <div className="flex flex-col gap-6 col-span-4 lg:col-span-3">
              {cardData.slice(2, 4).map((item) => (
                <InfoCard
                  key={item.id}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const InfoCard = ({ icon, title, description }) => {
  return (
    <div className="rounded-[20px] bg-[#F4F4F4] border-[#DADADA] border-[1.5px] p-7">
      <div className="mb-4 flex gap-2">
        <div className="relative h-11 aspect-square shrink-0">
          <Image src={icon} fill className="object-cover" alt={title} />
        </div>

        <h6 className="text-lg font-medium text-[#515151]">{title}</h6>
      </div>

      <p className="text-sm leading-relaxed text-text-secondary">
        {description}
      </p>
    </div>
  );
};
