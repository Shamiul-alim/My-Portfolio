"use client";
import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from "framer-motion";
import contact from "../lib/contact.json"

export default function ContactComp() {
  const [isToggled, setIsToggled] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    const data = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message');
    }
  };

  const handleToggle = () => {
    setIsToggled(!isToggled);
    setIsPulsing(!isToggled); // Trigger pulsing when button is toggled
  };

  const handleMessageClick = () => {
    setIsPulsing(false); // Stop the pulsing when the div is clicked
  };

  return (
    <div className="pl-[1.4rem] pr-[1.4rem] pt-[1rem] gap-[2rem]">
      <div className="flex flex-col">
        <h1 className='text-[#ffffffc4] text-[1.3rem] font-bold font-sans'>My Contact</h1>
        <div className='h-[0.2rem] w-[1.8rem] bg-yellow-400 rounded-2xl mt-[0.8rem] mb-[0.8rem]' />
      </div>

      <div className="flex flex-col">
        <motion.div
          className="h-[2rem] w-[4.7rem] rounded-3xl bg-[#333232cf] border-1 border-gray-600 flex justify-start items-center pl-[0.2rem] mt-[2rem] mb-[1rem]"
          onClick={handleToggle}
          animate={{
            backgroundColor: isToggled ? "rgba(60, 70, 81, 1)" : "#333232cf",
          }}
          transition={{
            duration: 0.5,
          }}
        >
          <motion.button
            className={`h-[1.5rem] w-[1.5rem] rounded-full bg-[#181818cf] transform transition-all duration-300 ease-in-out z-10 cursor-pointer ${
              isToggled ? 'translate-x-[2.75rem]' : 'translate-x-0'
            }`}
            whileHover={{
              scale: 1.1,
              translateY: '-5px',
              backgroundColor: 'rgba(250, 204, 21, 1)', // deep yellow on hover
              boxShadow: '0 0 10px rgba(250, 204, 21, 1)', // yellow glow
            }}
            transition={{
              type: "spring", stiffness: 200, damping: 12,
              backgroundColor: { duration: 0.3 },
              translateY: { duration: 0 },
              boxShadow: { duration: 0 },
            }}
          />
          <motion.h1
            className="text-[#ffffffc4] opacity-70 text-[0.7rem] text-center font-sans pb-[0.2rem] cursor-pointer"
          >
            {"contact".split("").map((char, index) => (
              <motion.span
                key={index}
                className="inline-block"
                animate={{
                  opacity: isToggled ? 0 : 1, // Fade out when moving to right
                }}
                initial={{
                  opacity: 0, // Start with invisible text
                  x: "50%", // Start from right (this will be reversed)
                }}
                whileInView={{
                  opacity: isToggled ? 0 : 1, // Sync fade-in with button movement
                  x: isToggled ? "-50%" : "50%", // Sync text direction (right to left)
                }}
                transition={{
                  delay: index * 0.1, // Delay each letter's opacity animation
                  duration: 0.2, // Duration for each letter's fade
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
        </motion.div>

        <h1 className='text-3xl opacity-80 font-sans font-bold text-[#ffffffc4] mb-[0.3rem] '>Get in touch</h1>
        <p className='text-[0.8rem] opacity-60 font-sans text-[#ffffffc4] '>Have questions or ready to move your <br />business into next level?</p>
      </div>

      <div className='flex flex-col gap-3 mt-[1rem]'>
        {contact.contact.map((contact, index) => (
          <motion.div
            className='flex flex-row items-center rounded-2xl bg-[#403f3f1d] shadow-md shadow-gray-950 w-[32rem] h-[3.5rem] border-2 border-transparent hover:border-yellow-200 cursor-pointer'
            whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(250,204,21,0.7)" }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
          >
            <div className='w-[2.5rem] h-[2.5rem] rounded-[0.5rem] ml-[0.8rem] flex justify-center items-center mr-[2rem]' >
              <img src={contact.icon} className='p-2 opacity-70' />
            </div>
            <div className='flex flex-col items-start'>
              <h1 className='text-[1rem] opacity-80 font-sans font-bold text-[#ffffffc4]'>{contact.name}</h1>
              <p className='text-[0.8rem] opacity-60 font-sans text-[#ffffffc4]'>{contact.description}</p>
            </div>
            <div className='ml-auto pr-[1.5rem]'>
              <ArrowUpRight className='w-[1.2rem] h-[1.2rem] text-[#ffffffc4] opacity-80 hover:opacity-100' />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pulsing Effect Triggered by Button Toggle */}
      <motion.div
        className='flex flex-col w-[32rem] h-[15rem] p-3 mt-[1rem] rounded-2xl shadow-md shadow-gray-950 bg-[#403f3f1d] gap-2 justify-center items-center'
        animate={{
          boxShadow: isPulsing ? [
            '0 0 15px rgba(250,204,21,0.7)',
            '0 0 20px rgba(250,204,21,1)',
            '0 0 25px rgba(250,204,21,1)',
            '0 0 30px rgba(250,204,21,0.7)',
          ] : '', // Pulse the yellow shadow when toggled
        }}
        transition={{
          duration: 0.5,
          repeat: isPulsing ? Infinity : 0, // Repeat the pulse when toggled
          repeatType: 'loop',
          ease: "easeInOut",
        }}
        onClick={handleMessageClick}
      >
        <input
          className='w-[30rem] h-[2.7rem] rounded-2xl border-2 border-yellow-200 focus:border-yellow-400 focus:outline-none opacity-50 text-[#ffffffc4] pl-2 pb-1'
          placeholder="Enter your name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          className='w-[30rem] h-[2.7rem] rounded-2xl border-2 border-yellow-200 focus:border-yellow-400 focus:outline-none opacity-50 text-[#ffffffc4] pl-2 pb-1'
          placeholder="Enter Your Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          className='w-[30rem] h-[4rem] rounded-2xl border-2 border-yellow-200 focus:border-yellow-400 focus:outline-none opacity-50 text-[#ffffffc4] pl-2 pb-1'
          placeholder="Enter Your Message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />

        <button
          className="text-zinc-500 hover:text-yellow-400 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-md py-2 px-6 shadow hover:shadow-yellow-400 duration-700"
          onClick={handleSubmit}
        >
          Send
        </button>
      </motion.div>
    </div>
  );
}
