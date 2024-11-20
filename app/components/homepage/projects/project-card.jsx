//app/components/projects/project-card.jsx
// @flow strict
"use client";
import * as React from 'react';
import Image from 'next/image';
import {FaGithub} from 'react-icons/fa';
import {motion} from 'framer-motion';

function ProjectCard({ project }) {

  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full hover:scale-[1.05] duration-500 transition-all">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      {/* Two-column layout */}
      <div className="flex flex-col lg:flex-row">
        {/* Left Half - Information */}
        <div className="w-full lg:w-1/2 p-4 lg:p-8 space-y-4">
          <div className="flex flex-row space-x-1 lg:space-x-2">
            <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
            <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
            <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
          </div>
          <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl">
            {project.name}
          </p>
        {/* </div> */}
        <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
          <code className="font-mono text-xs md:text-sm lg:text-base">
            <div className="blink">
              <span className="mr-2 text-pink-500">const</span>
              <span className="mr-2 text-white">project</span>
              <span className="mr-2 text-pink-500">=</span>
              <span className="text-gray-400">{'{'}</span>
            </div>
            <div>
              <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
              <span className="text-gray-400">{`'`}</span>
              <span className="text-amber-300">{project.name}</span>
              <span className="text-gray-400">{`',`}</span>
            </div>

            <div className="ml-4 lg:ml-8 mr-2">
              <span className=" text-white">tools:</span>
              <span className="text-gray-400">{` ['`}</span>
              {
                project.tools.map((tag, i) => (
                  <React.Fragment key={i}>
                    <span className="text-amber-300">{tag}</span>
                    {
                      project.tools.length - 1 !== i &&
                      <span className="text-gray-400">{`', '`}</span>
                    }
                  </React.Fragment>
                ))
              }
              <span className="text-gray-400">{"],"}</span>
            </div>
            <div>
              <span className="ml-4 lg:ml-8 mr-2 text-white">myRole:</span>
              <span className="text-orange-400">{project.role}</span>
              <span className="text-gray-400">,</span>
            </div>
            <div className="ml-4 lg:ml-8 mr-2">
              <span className="text-white">Description:</span>
              <span className="text-cyan-400">{' ' + project.description}</span>
              <span className="text-gray-400">,</span>
            </div>
            <div><span className="text-gray-400">{`};`}</span></div>
          </code>
        </div>
        
        {/* GitHub Icon Link */}
        {project.code && (
          <div className="flex justify-center mt-4 mb-4">
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#16f2b3] transition-all duration-300"
            >
              <FaGithub size={24} />
              View Code
            </a>
          </div>
        )}
      </div>
       {/* Architecture Image */}
       {project.image && (
            <div className="flex justify-center mt-4">
              <motion.div initial="hidden" animate="visible" variants={{
                hidden: {
                  scale: .8,
                  opacity: 0
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: .4
                  }
                },
              }}>
                <Image
                  src={project.image}
                  alt={`${project.name} Architecture`}
                  width={500}
                  height={300}
                  className="rounded-lg"
                />
                {/* <h1>Hofkdngrdj</h1> */}
              </motion.div>
            </div>
          )}
        </div>
    </div>
  );
};

export default ProjectCard;