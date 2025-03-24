"use client";

import Image from "next/image";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { ArrowLeft, ArrowRightLeft, Calendar, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import TitleWithPath from "@/components/TitleWithPath";
import UserPageLayout from "@/components/userPageLayout";

export default function Goal() {
  // goal circular progress
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
    <UserPageLayout>
      {/* title */}
      <TitleWithPath
        currentPath={window.location.pathname}
        previousPath="Dashboard"
      />

      {/* Stats Cards */}
      <div className="gap-6 mb-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm gap-10 flex flex-col">
          <h2 className="text-[#1b1b1b] t-4xl flex justify-center  font-bold mb-1">
            Liburan ke Bira
          </h2>

          {/* Comparison */}
          <div className="grid grid-cols-2 gap-5">
            {/* Circular Progress */}
            <div className="flex justify-center ">
              <div
                className="w-48 h-48 relative flex  justify-center "
                ref={ref}
              >
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

            <div className="flex flex-col jsutify-center text-center justify-center">
              <span className="t-4xl font-bold">Rp. 1.500.000</span>
              <span className="t-4xl font-bold">dari</span>
              <span className="t-4xl font-bold">Rp. 2.500.000</span>
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
            <Calendar size={35} /> <span className="t-4xl px-6">Start</span>
          </div>

          <div className=" mt-4">
            <p className="t-4xl font-bold ">1 Agustus, 2025</p>
          </div>
        </div>

        {/* Start Card */}
        <div className="bg-white  flex flex-col justify-start  rounded-xl p-14 border border-gray-200 shadow-sm ">
          <div className="flex  items-center text-6xl  font-bold text-[#525F7F]">
            <Calendar size={35} /> <span className="t-4xl px-6">End</span>
          </div>

          <div className=" mt-4">
            <p className="t-4xl font-bold ">1 Agustus, 2025</p>
          </div>
        </div>
      </div>
    </UserPageLayout>
  );
}
