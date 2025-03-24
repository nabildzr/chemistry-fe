'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { ArrowLeft, ArrowRightLeft, Calendar, ChevronLeft } from "lucide-react";
import Link from "next/link";

function Page() {
  const router = useRouter();

  // const handleChangePasswordClick = () => {
  //   router.push('/change-password'); // navigasi untuk halaman ganti password
  // };

  // const handleLogoutClick = () => {
  //   router.push('http://localhost:3000/'); // navigasi untuk halaman logout
  // };

  return (
    <div className="min-h-screen p-8 bg-white">

      {/* </div> */}

              {/* title */}
              <h1 className="text-3xl font-bold text-[#1b1b1b] mb-8 flex items-center">
          {/* path 1 */}
          <Link
            href={"/dashboard"}
            className="flex transition-colors duration-200  hover:text-[#525F7F]"
          >
            <ChevronLeft
              size={40}
              className="p-2  rounded-full cursor-pointer"
            />
            Dashboard
          </Link>
          {/*  */}
          <div className="flex">
            <ChevronLeft size={40} className="p-2 " />
            Profile
          </div>
        </h1>

      {/* Profile Section */}
      <div className="flex justify-center pt-12 px-8">
        <div className="bg-white border border-gray-300 rounded-lg p-8 shadow-lg w-full max-w-3xl flex flex-col lg:flex-row lg:items-center lg:space-x-8">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start items-center mb-6 lg:mb-0">
            <Image
              src="/assets/icon/user.svg"
              alt="Profile Picture"
              width={128}
              height={128}
              className=" "
            />
          </div>

          {/* Profile Details */}
          <div className="flex flex-col w-full">
            {/* Input Fields */}
            <div className="grid gap-6">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Nama</label>
                <input
                  type="text"
                  defaultValue=""
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00e5c7]"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Username</label>
                <input
                  type="text"
                  defaultValue=""
                  readOnly
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00e5c7]"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Status</label>
                  <input
                    type="text"
                    defaultValue=""
                    readOnly
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00e5c7]"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Gender</label>
                  <input
                    type="text"
                    defaultValue=""
                    readOnly
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00e5c7]"
                  />
                </div>
              </div>
            </div>

             {/* Action Buttons */}
            {/* <div className="flex flex-col md:flex-row md:space-x-12 space-y-4 md:space-y-0 mt-6">
              <button
                onClick={handleChangePasswordClick}
                className="w-full md:w-auto bg-yellow-500 text-white px-14 py-2 rounded-md hover:bg-yellow-600 flex items-center justify-center space-x-2"
              >
                <Image
                  src="/assets/Admin/Reset_user.png"
                  alt="Reset Icon"
                  width={16}
                  height={16}
                />
                <span>Ganti Password</span>
              </button>
              <button
                onClick={handleLogoutClick}
                className="w-full md:w-auto bg-red text-white px-24 py-2 rounded-md hover:bg-red-600 flex items-center justify-center space-x-2"
              >
                <Image
                  src="/assets/Class/logout.png"
                  alt="Reset Icon"
                  width={16}
                  height={16}
                />
                <span>Logout</span>
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
