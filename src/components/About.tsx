"use client";
import activities from "../lib/activity.json";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="pl-[1.4rem] pr-[1.4rem] pt-[1rem]">
      <h1 className="text-[#ffffffc4] text-[1.3rem] font-bold font-sans">
        About Me
      </h1>
      <div className="h-[0.2rem] w-[1.8rem] bg-yellow-400 rounded-2xl mt-[0.8rem] mb-[0.8rem]" />
      <div className="mb-[1.5rem]">
        <p className="text-[#ffffff94] text-[0.75rem] sm:text-[0.85rem] mb-[0.7rem] font-sans">
          Hi, I’m Samiul Alim Shihab, a Full-Stack developer specializing in AI,
          machine learning, and web development. i have experience with
          independent international clints and full-time remote job, honing my
          skills in various technologies.
        </p>
        <p className="text-[#ffffff94] text-[0.75rem] sm:text-[0.85rem] mb-[0.7rem] font-sans">
          I enjoy creating projects that combine creativity with technology. I
          have experience with Python, C++, JavaScript, Tailwind CSS, React,
          Node.js, Next.js, Nest.js, Flask, Astro and I am always learning new
          tools and frameworks.
        </p>
        <p className="text-[#ffffff94] text-[0.75rem] sm:text-[0.85rem] font-sans">
          I love solving real-world problems, building interactive applications,
          and exploring innovative ideas. My goal is to grow as a professional
          developer and make a meaningful impact through technology.
        </p>
      </div>
      <h1 className="text-[#ffffffc4] text-[1.1rem] font-bold font-sans">
        What I'm Doing
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 mt-[1.3rem] gap-[0.8rem] ">
        {activities.activities.map((activity, index) => (
          <motion.div
            key={index}
            className=" group h-[6rem] w-full sm:w-[16rem] bg-[#232222cf] rounded-[0.7rem] shadow-lg shadow-[#0e0f12d0] flex flex-row cursor-pointer border-2 border-transparent "
            whileHover={{
              boxShadow: "0 0 20px rgba(250,204,21,0.8)",
              borderColor: "rgba(255, 215, 58, 0.8)",
              scale: 1.02,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <div className="w-[3.3rem] h-[6rem]">
              <img
                className="h-[1.8rem] w-[1.8rem] mt-[2rem] ml-[0.7rem] "
                src={activity.icon}
              ></img>
            </div>
            <div className="flex flex-col pt-[1.2rem] pl-[1rem] pr-[1rem] gap-[0.3rem] ">
              <h1 className="text-[0.9rem] font-sans font-semibold text-[#ffffffa9]">
                {activity.title}
              </h1>
              <p className="text-[0.6rem] text-[#ffffff94]">
                {activity.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
