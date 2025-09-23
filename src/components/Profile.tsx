"use client";
import React from 'react';
import Data from '../lib/data.json';
// import { date } from 'astro:schema';

export default function profile() {
  return (
    <div>
      <div className="bg-[#23222285] h-[30rem] w-[11rem] border-1 border-gray-800 rounded-2xl flex flex-col items-center shadow-lg shadow-[#000000a7]">
			<div className="bg-[#3a3939cf] h-[7rem] w-[7rem] rounded-3xl mt-[2.3rem] mb-[1rem]">
				<img className='p-[0.4rem]' src={Data.profileImage}/>
			</div>
			<div className='text-[#ffffffc4] font-serif text-sm'>{Data.name}</div>
			<div className="bg-[#2c2b2bcf] h-[1.3rem] w-[6.5rem] rounded-sm mt-[0.7rem] text-[0.6rem] text-[#ffffff86] flex justify-center items-center">{Data.role}</div>
            <div className='bg-[#3a3939cf] h-[0.07rem] w-[8.7rem] mt-[1.3rem]'></div>
            <div className='flex gap-[0.4rem] flex-row mt-[1.5rem]  '>
                <div className='bg-[#28252585] h-[1.9rem] w-[1.9rem] rounded-sm  shadow-md shadow-[#0e0f12d0] p-[0.6rem]'>
                    <img className='' src={Data.emailIcon}/>
                </div>
                <div className='flex flex-col text-[0.5rem] text-[#ffffff86] mt-[0.1rem]'>
                    <div className='text-[#ffffff51]'>EMAIL</div>
                    <span>{Data.email}</span>
                </div>
            </div>
            <div className='flex gap-[0.4rem] flex-row mt-[1rem] mr-[3.5rem]'>
                <div className='bg-[#28252585] h-[1.9rem] w-[1.9rem] rounded-sm  shadow-md shadow-[#0e0f12d0] p-[0.6rem]'>
                    <img className='' src={Data.phoneIcon}/>
                </div>
                <div className='flex flex-col text-[0.5rem] text-[#ffffff86] mt-[0.1rem]'>
                    <div className='text-[#ffffff51]'>PHONE</div>
                    <span>{Data.phone}</span>
                </div>
            </div>
            <div className='flex gap-[0.4rem] flex-row mt-[1rem] mr-[3.8rem] '>
                <div className='bg-[#28252585] h-[1.9rem] w-[1.9rem] rounded-sm  shadow-md shadow-[#0e0f12d0] p-[0.6rem]'>
                    <img className='' src={Data.calendarIcon}/>
                </div>
                <div className='flex flex-col text-[0.5rem] text-[#ffffff86] mt-[0.1rem]'>
                    <div className='text-[#ffffff51]'>BRITHDAY</div>
                    <span>{Data.birthday}</span>
                </div>
            </div>
            <div className='flex gap-[0.4rem] flex-row mt-[1rem] mr-[2rem] '>
                <div className='bg-[#28252585] h-[1.9rem] w-[1.9rem] rounded-sm  shadow-md shadow-[#0e0f12d0] p-[0.6rem]'>
                    <img className='' src={Data.locationIcon}/>
                </div>
                <div className='flex flex-col text-[0.5rem] text-[#ffffff86] mt-[0.1rem]'>
                    <div className='text-[#ffffff51]'>LOCATION</div>
                    <span>{Data.location}</span>
                </div>
            </div>
            <div className='flex flex-row  justify-center item'>
                <img className='h-[0.85rem] w-[0.85rem] mt-[0.95rem] mr-[0.4rem]' src={Data.whatsAppIcon}/>
                <img className='h-[1.2rem] w-[1.2rem] mt-[0.8rem] mr-[0.25rem]' src={Data.linkedinIcon}/>
                <img className='h-[0.9rem] w-[1.25rem] mt-[1rem] mr-[0.3rem]' src={Data.instagramIcon}/>
                <img className='h-[1rem] w-[1rem] mt-[0.98rem] mr-[0.3rem]' src={Data.githubIcon}/>
                <img className='h-[1.4rem] w-[1.4rem] mt-[0.8rem]' src={Data.facebookIcon}/>
            </div>
		</div>

    </div>
  );
}
