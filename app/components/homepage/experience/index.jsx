"use client";

// @flow strict
import { useState } from 'react';
import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import GlowCard from "../../helper/glow-card";

function Experience() {
  const [selectedExperience, setSelectedExperience] = useState(experiences[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Experiences
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Sidebar: Company List */}
          <div className="flex flex-col gap-6">
            {experiences.map((experience) => (
              <GlowCard key={experience.id} identifier={`experience-${experience.id}`}>
                <button
                  onClick={() => setSelectedExperience(experience)}
                  className={`text-left p-3 w-full rounded-md transition-all duration-300 ${
                    selectedExperience.id === experience.id
                      ? 'bg-[#1a1443] text-[#16f2b3]'
                      : 'bg-transparent text-gray-400'
                  } hover:bg-[#1a1443]`}
                >
                  <div className="flex justify-center">
                    <p className="text-xs sm:text-sm text-[#16f2b3]">
                      {experience.duration}
                    </p>
                  </div>
                  <div className="flex items-center gap-x-8 px-3 py-5">
                    <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                      <BsPersonWorkspace size={36} />
                    </div>
                    <div>
                      <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                        {experience.title}
                      </p>
                      <p className="text-sm sm:text-base">
                        {experience.company}
                      </p>
                    </div>
                  </div>
                </button>
              </GlowCard>
            ))}
          </div>

          {/* Experience Details */}
          <div className="text-gray-200 bg-[#1a1b2e] p-8 rounded-md shadow-lg">
            <h2 className="text-2xl font-semibold text-[#16f2b3] mb-2">
              {selectedExperience.title} @ {selectedExperience.company}
            </h2>
            <p className="text-sm text-gray-400 mb-4">{selectedExperience.duration}</p>
            <h3 className="text-sm text-gray-400 mb-4">{selectedExperience.techstack}</h3>
            <ul className="list-disc list-inside space-y-3 text-sm lg:text-base">
              {selectedExperience.responsibilities.map((item, idx) => (
                <li key={idx} className="text-gray-300">
                  {item}
                </li>
              ))}
            </ul>
            <br></br>
            <br></br>
            <h3>Click on Image To Expand!</h3>
            {selectedExperience.image1 && (
              <div className="mt-6">
                <br></br>
                <Image
                  src={selectedExperience.image1}
                  alt={`${selectedExperience.title} image`}
                  width={500}
                  height={300}
                  className="rounded-md shadow-lg cursor-pointer"
                  onClick={() => setIsModalOpen(true)} // Open modal on click
                />
              </div>
            )}
            <br></br>
            {selectedExperience.github1 && (
            <div className="mt-6">
                <a href={selectedExperience.github1} target="_blank" rel="noopener noreferrer">
                  Click Me To Visit GitHub!
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal for Enlarged Image */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
          onClick={() => setIsModalOpen(false)} // Close modal when clicking outside
        >
          <div className="relative">
            <Image
              src={selectedExperience.image1}
              alt={`${selectedExperience.title} enlarged image`}
              width={1000}
              height={600}
              className="rounded-lg"
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={() => setIsModalOpen(false)} // Close modal on button click
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Experience;
