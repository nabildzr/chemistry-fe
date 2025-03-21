"use client";

import Image from "next/image";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { ArrowLeft, ArrowRightLeft, Calendar, ChevronLeft } from "lucide-react";

export default function Dashboard() {
  const [progress, setProgress] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView) {
        setProgress(75);
      }
    },
  });
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-[#1b1b1b] mb-8 flex items-center">
          <ChevronLeft size={40} /> Goal
        </h1>

        {/* Stats Cards */}
        <div className="gap-6 mb-6">
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <h2 className="text-[#1b1b1b] text-3xl font-bold mb-1">Goal</h2>
            <p className="text-gray-500 mb-6">Liburan ke Bira</p>

            <div className="grid grid-cols-2">
              
              {/* Circular Progress */}
              <div className="flex justify-center">
                <div className="w-48 h-48 relative" ref={ref}>
                  <svg style={{ height: 0, position: "absolute" }}>
                    <defs>
                      <linearGradient
                        id="goalGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#00D2D2" />
                        <stop offset="100%" stopColor="#06FF9F" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <CircularProgressbar
                    className=""
                    value={progress}
                    text={`${progress}%`}
                    styles={{
                      path: {
                        stroke: "url(#goalGradient)",
                        strokeLinecap: "round",
                        transition: "stroke-dashoffset 0.5s ease 0s",
                      },
                      trail: {
                        stroke: "#f7f7f7",
                      },
                      text: {
                        fill: "#1b1b1b",
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                      },
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Goal Card */}

          {/* Start Card */}
          <div className="bg-white  flex flex-col justify-start  rounded-xl p-14 border border-gray-200 shadow-sm ">
            <div className="flex  items-center text-6xl  font-bold text-[#525F7F]">
              <Calendar size={40} />{" "}
              <span className="text-4xl px-6">Start</span>
            </div>

            <div className=" mt-4">
              <p className="text-5xl font-bold ">1 Agustus, 2025</p>
            </div>
          </div>

          {/* Start Card */}
          <div className="bg-white  flex flex-col justify-start  rounded-xl p-14 border border-gray-200 shadow-sm ">
            <div className="flex  items-center text-6xl  font-bold text-[#525F7F]">
              <Calendar size={40} /> <span className="text-4xl px-6">End</span>
            </div>

            <div className=" mt-4">
              <p className="text-5xl font-bold ">1 Agustus, 2025</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
