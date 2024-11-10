// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";


function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            Who I am?
          </p>
          {personalData.description
            .split("\n\n") // Split the description by double newlines
            .map((paragraph, index) => (
              <p key={index} className="text-gray-200 text-sm lg:text-lg mb-4">
                {paragraph}
              </p>
            ))}
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <div className="w-[400px] h-[400px] flex-shrink-0">
              <Image
                src={personalData.profile}
                width={400}
                height={400}
                alt="Varsha Hindupur"
                className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
              />
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;