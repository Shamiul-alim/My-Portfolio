import React from 'react';
import Data from '../components/data.json';


export default function About() {
  return (
    <div className='ml-[1.4rem] mr-[1.4rem] flex flex-col'>
        <h1 className='text-[#ffffffc4] text-[1.3rem] font-bold font-sans'>About Me</h1>
        <div className='h-[0.2rem] w-[1.8rem] bg-yellow-400 rounded-2xl mt-[0.8rem] mb-[0.8rem]'/>
        <div className='mb-[1.5rem]'>
            <p className='text-[#ffffff94] text-[0.75rem] mb-[0.7rem] font-sans'>
                Hi, I’m Samiul Alim Shihab, a Full-Stack developer specializing in AI, machine learning, and web development. i have experience with independent international clints and full-time remote job, honing my skills in various technologies.</p>
            <p className='text-[#ffffff94] text-[0.75rem] mb-[0.7rem] font-sans'>
                I enjoy creating projects that combine creativity with technology. I have experience with Python, C++, JavaScript, Tailwind CSS, React, Node.js, Flask, Astro and I am always learning new tools and frameworks.
            </p>
            <p className='text-[#ffffff94] text-[0.75rem] font-sans'>
                I love solving real-world problems, building interactive applications, and exploring innovative ideas. My goal is to grow as a professional developer and make a meaningful impact through technology.
            </p>
        </div>
        <h1 className='text-[#ffffffc4] text-[1.1rem] font-bold font-sans'>What I'm Doing</h1>
        <div className='flex flex-col mt-[0.9rem] gap-[0.8rem]'>
            <div className='flex flex-row gap-[1.1rem]'>
                <div className='h-[6rem] w-[16rem] bg-[#232222cf] rounded-[0.7rem] shadow-lg 
                shadow-[#0e0f12d0] flex flex-row gap-[0.3rem] '>
                    <div className='w-[3.3rem] h-[6rem]'>
                        <img className='h-[1.8rem] w-[1.8rem] mt-[1.5rem] ml-[1rem] ' src={Data.fontendIcon}></img>
                    </div>
                    <div className='flex flex-col pt-[1.2rem] pl-[0.1rem] gap-[0.3rem]'>
                        <h1 className='text-[0.9rem] font-sans font-semibold text-[#ffffffa9]'>Frontend Development</h1>
                        <p className='text-[0.6rem] text-[#ffffff94]'>
                            High-quality frontend development of <br/>sites at a professional level.
                        </p>
                    </div>
                </div>
                <div className='h-[6rem] w-[16rem] bg-[#232222cf] rounded-[0.7rem]  shadow-lg shadow-[#0e0f12d0] flex flex-row gap-[0.3rem]'>
                    <div className='w-[3.3rem] h-[6rem]'>
                        <img className='h-[1.8rem] w-[1.8rem] mt-[1.5rem] ml-[1rem] ' src={Data.backendIcon}></img>
                    </div>
                    <div className='flex flex-col pt-[1.2rem] pl-[0.1rem] gap-[0.3rem]'>
                        <h1 className='text-[0.9rem] font-sans font-semibold text-[#ffffffa9]'>Backend Development</h1>
                        <p className='text-[0.6rem] text-[#ffffff94]'>
                            Professional backend development of <br/>applications in JavaScript.
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex flex-row gap-[1.1rem]'>
                <div className='h-[6rem] w-[16rem] bg-[#232222cf] rounded-[0.7rem] shadow-lg 
                shadow-[#0e0f12d0] flex flex-row gap-[0.3rem] '>
                    <div className='w-[3.3rem] h-[6rem]'>
                        <img className='h-[1.4rem] w-[1.8rem] mt-[1.6rem] ml-[1rem] ' src={Data.gameIcon}></img>
                    </div>
                    <div className='flex flex-col pt-[1.2rem] pl-[0.1rem] gap-[0.3rem]'>
                        <h1 className='text-[0.9rem] font-sans font-semibold text-[#ffffffa9]'>Game Development</h1>
                        <p className='text-[0.6rem] text-[#ffffff94]'>
                            I’m passionate about game development,<br/> exploring AI-driven mechanics.
                        </p>
                    </div>
                </div>
                <div className='h-[6rem] w-[16rem] bg-[#232222cf] rounded-[0.7rem]  shadow-lg shadow-[#0e0f12d0] flex flex-row gap-[0.3rem] '>
                    <div className='w-[3.3rem] h-[6rem]'>
                        <img className='h-[1.8rem] w-[1.8rem] mt-[1.5rem] ml-[1rem] ' src={Data.machineIcon1}></img>
                    </div>
                    <div className='flex flex-col pt-[1.2rem] pl-[0.1rem] gap-[0.3rem]'>
                        <h1 className='text-[0.9rem] font-sans font-semibold text-[#ffffffa9]'>Machine Learning</h1>
                        <p className='text-[0.6rem] text-[#ffffff94]'>
                            I enjoy applying machine learning <br/>to solve real-world problems.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
