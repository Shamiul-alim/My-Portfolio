import '../styles/global.css';
import { DownloadIcon, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function ResumeComp() {
    const letterVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };
  const text = "Hey! You Want Something New?";
  return (
    <div className=" pl-[1.4rem] pr-[1.4rem] pt-[1rem] gap-[2rem] ">
        <h1 className='text-[#ffffffc4] text-[1.3rem] font-bold font-sans'>My Resume</h1>
        <div className='h-[0.2rem] w-[1.8rem] bg-yellow-400 rounded-2xl mt-[0.8rem] mb-[0.8rem]'/>
        <p className="text-center text-[1rem] text-[#ffffffc4] mt-[12rem] mb-[2rem] ml-[3rem] mr-[3rem] opacity-70">
            If you're looking for a{" "}
            <span className="text-yellow-200 font-semibold ">passionate developer</span> who thrives in challenging environments, check out my CV. Let's work together to make an impact with technology.
        </p>

      <motion.a
        href="/Resume.pdf"
        download
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-center gap-3 px-6 py-3 bg-neutral-800 border border-yellow-300  h-[2.5rem] w-[15rem] ml-[8.5rem]
                   text-yellow-200 font-semibold rounded-2xl shadow-md 
                   hover:bg-neutral-700 transition duration-300"
      >
        <DownloadIcon className="w-6 h-6 animate-bounce" />
        <span>Download Resume</span>
      </motion.a>
      
            

    </div>
  );
}