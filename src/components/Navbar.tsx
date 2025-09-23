"use client";
import { useEffect,useState } from "react";

export default function Navbar() {
  const [currentPath, setcurrentPath] = useState("");
  useEffect(()=>{
    setcurrentPath(window.location.pathname);
  },[]);
  const links = [
    { name: "About", path: "/" },
    { name: "Resume", path: "/resume" },
    { name: "Projects", path: "/project" },
    { name: "Contact", path: "/contact" }
  ];
  return (
    <nav className="bg-[#2d2c2ccf] w-[20rem] h-[2.7rem] float-right rounded-bl-[1rem] rounded-tr-[0.8rem] flex flex-row text-[#ffffff9c] justify-center items-center gap-[1.5rem] pb-[0.3rem] text-sm shadow-md shadow-slate-700">

        {links.map((link) => (
          <a
            key={link.path}
            href={link.path}
            className={`${
              currentPath === link.path
                ? "text-yellow-200 font-bold"
                : "text-gray-300 hover:text-yellow-200"
            }`}
          >
            {link.name}
          </a>
        ))}
     
    </nav>
  );
}
