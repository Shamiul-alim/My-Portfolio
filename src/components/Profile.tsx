"use client";
import React from 'react';
import Data from '../lib/data.json';
import { motion } from "framer-motion";


export default function profile() {
  return (
    <div>
      <div className="bg-[#23222285] sm:visible h-[68vh] w-[11rem] sm:w-[] border-1 border-gray-800 rounded-2xl flex flex-col items-center shadow-lg shadow-[#000000a7]">
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
            <div className="flex items-center justify-center gap-1 mt-[0.5rem]">
                <div className="social-button">
                    <button className="relative w-7.5 h-7.5 rounded-full group ">
                    <div
                        className="floater w-full h-full absolute top-0 left-0 bg-[#333232cf]  rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"
                    ></div>
                    <a
                        className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-[#333232cf]  rounded-full  cursor-pointer " href=''
                    >
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 22 22"
                        fill="none"
                        >
                        <path
                            className="group-hover:fill-yellow-400 fill-[#ffffffc4] opacity-70 duration-300 "
                            d="M21.94 6.46809C21.8884 5.2991 21.6994 4.49551 21.4285 3.79911C21.1492 3.05994 20.7194 2.39818 20.1564 1.84802C19.6062 1.28932 18.9401 0.855163 18.2094 0.580194C17.5091 0.309437 16.7096 0.120336 15.5407 0.0688497C14.363 0.0128932 13.9891 0 11.0022 0C8.01527 0 7.64141 0.0128932 6.46808 0.064466C5.29914 0.116039 4.49551 0.305225 3.79932 0.57581C3.05994 0.855163 2.39818 1.28494 1.84802 1.84802C1.28932 2.39813 0.855377 3.06428 0.580193 3.7949C0.309437 4.49551 0.120379 5.2948 0.0688496 6.4637C0.0129362 7.64141 0 8.01527 0 11.0022C0 13.9891 0.0129362 14.363 0.0644659 15.5363C0.116039 16.7053 0.305225 17.5089 0.576025 18.2053C0.855377 18.9444 1.28932 19.6062 1.84802 20.1564C2.39818 20.7151 3.06432 21.1492 3.79494 21.4242C4.49547 21.6949 5.29476 21.884 6.46391 21.9355C7.63702 21.9873 8.0111 22 10.998 22C13.9849 22 14.3588 21.9873 15.5321 21.9355C16.7011 21.884 17.5047 21.695 18.2009 21.4242C18.9321 21.1415 19.5961 20.7091 20.1505 20.1548C20.7048 19.6005 21.1373 18.9365 21.42 18.2053C21.6906 17.5047 21.8798 16.7052 21.9314 15.5363C21.9829 14.363 21.9958 13.9891 21.9958 11.0022C21.9958 8.01527 21.9914 7.64137 21.94 6.46809ZM19.9588 15.4503C19.9114 16.5248 19.731 17.105 19.5805 17.4918C19.2109 18.4502 18.4502 19.2109 17.4918 19.5805C17.105 19.731 16.5206 19.9114 15.4503 19.9586C14.29 20.0103 13.942 20.023 11.0066 20.023C8.07118 20.023 7.71881 20.0103 6.56259 19.9586C5.48816 19.9114 4.90796 19.731 4.52117 19.5805C4.04425 19.4043 3.61014 19.1249 3.25772 18.7596C2.89242 18.4029 2.61306 17.9731 2.43677 17.4961C2.28635 17.1094 2.10589 16.5248 2.05874 15.4547C2.007 14.2943 1.99428 13.9461 1.99428 11.0107C1.99428 8.07535 2.007 7.72298 2.05874 6.56698C2.10589 5.49254 2.28635 4.91235 2.43677 4.52555C2.61306 4.04842 2.89241 3.61439 3.26211 3.26189C3.61865 2.89658 4.04842 2.61723 4.52555 2.44115C4.91235 2.29073 5.49692 2.11023 6.56697 2.06291C7.72736 2.01134 8.07556 1.99844 11.0107 1.99844C13.9505 1.99844 14.2985 2.01134 15.4547 2.06291C16.5292 2.11027 17.1093 2.29069 17.4961 2.44111C17.9731 2.61723 18.4072 2.89658 18.7596 3.26189C19.1249 3.61865 19.4042 4.04842 19.5805 4.52555C19.731 4.91235 19.9114 5.49671 19.9587 6.56698C20.0103 7.72736 20.0232 8.07535 20.0232 11.0107C20.0232 13.9461 20.0104 14.29 19.9588 15.4503Z"
                        ></path>
                        <path
                            className="group-hover:fill-yellow-400 fill-[#ffffffc4] opacity-70 duration-300"
                            d="M11.0026 5.35054C7.88252 5.35054 5.35107 7.88182 5.35107 11.0021C5.35107 14.1223 7.88252 16.6536 11.0026 16.6536C14.1227 16.6536 16.6541 14.1223 16.6541 11.0021C16.6541 7.88182 14.1227 5.35054 11.0026 5.35054ZM11.0026 14.668C8.97844 14.668 7.33654 13.0264 7.33654 11.0021C7.33654 8.97774 8.97844 7.33609 11.0025 7.33609C13.0269 7.33609 14.6685 8.97774 14.6685 11.0021C14.6685 13.0264 13.0268 14.668 11.0026 14.668ZM18.1971 5.12706C18.1971 5.85569 17.6063 6.44646 16.8775 6.44646C16.1489 6.44646 15.5581 5.85569 15.5581 5.12706C15.5581 4.39833 16.1489 3.80774 16.8775 3.80774C17.6063 3.80774 18.1971 4.39829 18.1971 5.12706Z"
                        ></path>
                        </svg>
                    </a>
                    </button>
                </div>
                <div className="social-button">
                    <button className="relative w-7.5 h-7.5 rounded-full group">
                    <div
                        className="floater w-full h-full absolute top-0 left-0 bg-[#333232cf] rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"
                    ></div>
                    <a
                        className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-[#333232cf]  rounded-full cursor-pointer " href='https://github.com/Shamiul-alim'
                    >
                        <svg
                        height="21"
                        width="21"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            className="group-hover:fill-yellow-400 fill-[#ffffffc4] opacity-70 duration-300"
                            d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.17 6.839 9.481.5.092.683-.217.683-.481 0-.237-.009-.866-.013-1.699-2.782.603-3.37-1.338-3.37-1.338-.454-1.15-1.11-1.458-1.11-1.458-.906-.619.069-.606.069-.606 1.002.071 1.527 1.03 1.527 1.03.89 1.529 2.34 1.087 2.911.831.091-.645.348-1.087.634-1.338-2.22-.252-4.555-1.11-4.555-4.94 0-1.09.39-1.986 1.028-2.682-.103-.252-.446-1.268.098-2.642 0 0 .837-.268 2.75 1.024a9.563 9.563 0 012.496-.335 9.58 9.58 0 012.496.335c1.913-1.292 2.75-1.024 2.75-1.024.544 1.374.202 2.39.1 2.642.64.696 1.027 1.592 1.027 2.682 0 3.839-2.338 4.685-4.567 4.933.358.309.678.916.678 1.847 0 1.334-.012 2.412-.012 2.74 0 .267.18.577.688.481A12.01 12.01 0 0022 12c0-5.523-4.477-10-10-10z"
                            fill="#FFFFFF"
                        ></path>
                        </svg>
                    </a>
                    </button>
                </div>
                <div className="social-button">
                    <button className="relative w-7.5 h-7.5 rounded-full group">
                    <div
                        className="floater w-full h-full absolute top-0 left-0 bg-[#333232cf] rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"
                    ></div>
                    <a
                        className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-[#333232cf] rounded-full cursor-pointer" href='https://www.linkedin.com/in/shamiul-alim-96bb6b247/'
                    >
                        <svg
                        height="18"
                        width="18"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            className="group-hover:fill-yellow-400 fill-[#ffffffc4] opacity-70 duration-300"
                            d="M20,2H4C2.9,2,2,2.9,2,4v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M8.5,19H6V10h2.5V19z M7.3,9 h-0.1C6.4,9,6,8.6,6,8.1V7.9c0-0.5,0.4-0.9,0.9-0.9h0.1C7.6,7,8,7.4,8,7.9v0.1C8,8.6,7.6,9,7.3,9z M19,19h-2.5v-4.9 c0-1.2-0.4-2-1.4-2c-0.8,0-1.3,0.6-1.5,1.2h-0.1V19H10V10h2.3v1.3h0C12.7,10.7,14,9.9,15.5,9.9c2.1,0,3.5,1.4,3.5,3.8V19z"
                            fill="#FFFFFF"
                        ></path>
                        </svg>
                    </a>
                    </button>
                </div>
                <div className="social-button">
                    <button className="relative w-7.5 h-7.5 rounded-full group">
                    <div
                        className="floater w-full h-full absolute top-0 left-0 bg-[#333232cf] rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"
                    ></div>
                    <a
                        className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-[#333232cf] rounded-full cursor-pointer " href=''
                    >
                        <svg
                        viewBox="0 0 13 22"
                        height="15.5"
                        width="15.5"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            className="group-hover:fill-yellow-400 fill-[#ffffffc4] opacity-70 duration-300"
                            d="M7.71289 22H4.1898C3.60134 22 3.12262 21.5213 3.12262 20.9328V12.9863H1.06717C0.478672 12.9863 0 12.5074 0 11.9191V8.514C0 7.9255 0.478672 7.44683 1.06717 7.44683H3.12262V5.74166C3.12262 4.05092 3.6535 2.6125 4.65773 1.58207C5.6665 0.546992 7.07627 0 8.7346 0L11.4214 0.00438281C12.0089 0.00537109 12.4868 0.484086 12.4868 1.07151V4.23311C12.4868 4.82157 12.0083 5.30028 11.4199 5.30028L9.61091 5.30093C9.05919 5.30093 8.91868 5.41153 8.88864 5.44543C8.83914 5.50172 8.78023 5.66062 8.78023 6.09954V7.4467H11.284C11.4725 7.4467 11.6551 7.49319 11.812 7.58076C12.1506 7.76995 12.3611 8.12762 12.3611 8.51417L12.3597 11.9193C12.3597 12.5074 11.881 12.9861 11.2926 12.9861H8.78019V20.9328C8.78023 21.5213 8.30139 22 7.71289 22ZM4.41233 20.7103H7.49031V12.4089C7.49031 12.016 7.81009 11.6964 8.20282 11.6964H11.07L11.0712 8.73662H8.20265C7.80991 8.73662 7.49031 8.41706 7.49031 8.02411V6.09959C7.49031 5.59573 7.54153 5.0227 7.92185 4.59198C8.38144 4.07133 9.10568 4.01126 9.61056 4.01126L11.1971 4.01057V1.29375L8.73357 1.28975C6.06848 1.28975 4.41238 2.99574 4.41238 5.7417V8.02407C4.41238 8.4168 4.09277 8.73658 3.7 8.73658H1.28975V11.6964H3.7C4.09277 11.6964 4.41238 12.016 4.41238 12.4089L4.41233 20.7103Z"
                            fill="#FFFFFF"
                        ></path>
                        </svg>
                    </a>
                    </button>
                </div>
            </div>
		</div>

    </div>
  );
}
