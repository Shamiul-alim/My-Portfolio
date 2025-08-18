import React from 'react';


export default function Navbar() {
  const path = window.location.pathname;
  return (
    <nav>
        <ul className="bg-[#2d2c2ccf] w-[20rem] h-[2.4rem] ml-auto rounded-bl-[1rem] rounded-tr-[0.8rem] flex flex-row text-[#ffffff9c] justify-center items-center gap-[1.5rem] pb-[0.3rem] text-sm shadow-md ">
                    <li><a className={path === "/" ? "text-yellow-400" : "text-[#ffffff9c] hover:text-yellow-400"} href="/">About</a></li>
                    <li><a className={path === "/resume" ? "text-yellow-400" : "text-[#ffffff9c] hover:text-yellow-400"}href='/resume'>Resume</a></li>
                    <li><a className={path === "/project" ? "text-yellow-400" : "text-[#ffffff9c] hover:text-yellow-400"}href='/project'>Project</a></li>
                    <li><a className={path === "/contact" ? "text-yellow-400" : "text-[#ffffff9c] hover:text-yellow-400"}href='contact'>Contact</a></li>
        </ul>
    </nav>
  );
}
