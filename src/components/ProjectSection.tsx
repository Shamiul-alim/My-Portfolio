"use client";
import '../styles/global.css';
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import projects from "../lib/project.json";

export default function ProjectSection() {
  return (
    <div className="pl-[1.4rem] pr-[1.4rem] pt-[1rem] gap-[2rem] ">
        <h1 className='text-[#ffffffc4] text-[1.3rem] font-bold font-sans'>My Project</h1>
        <div className='h-[0.2rem] w-[1.8rem] bg-yellow-400 rounded-2xl mt-[0.8rem] mb-[0.8rem]'/>
      <p className="text-center mt-[3rem] ml-[3rem] mr-[3rem]  text-[#ffffffc4] opacity-70 mb-[2rem] font-sans">
        Here are some of my projects. Click on the cards to visit their GitHub repositories.
      </p>

      <div className="grid grid-cols-1 gap-6 w-full max-w-4xl">
        {projects.projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            className="group h-[7rem]  p-4 rounded-2xl bg-neutral-800 shadow-lg flex flex-col gap-2 border-2 border-transparent hover:border-yellow-300 cursor-pointer"
            whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(250,204,21,0.7)" }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
          >
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-200 animate-pulse" />
              <h3 className="text-lg font-semibold text-neutral-100 font-sans">{project.title}</h3>
            </div>
            <p className="text-neutral-400 font-sans text-[1rem]">{project.description}</p>
          </motion.a>
        ))}
      </div>
    </div>
  );
}