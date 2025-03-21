'use client'

import Image from "next/image"
import { CircularProgressbar } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import { useState } from "react"
import { useInView } from "react-intersection-observer"

export default function Dashboard() {
  const [progress, setProgress] = useState(0)
  const { ref, inView } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView) {
        setProgress(75)
      }
    },
  })
  return (
    <div className="min-h-screen bg-white">

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-[#1b1b1b] mb-8">Dashboard</h1>

        {/* Total Card */}
        <div className="bg-gradient-to-t from-[#06FF9F] to-[#00D2D2] from-10% to-100% rounded-xl p-8 mb-8 flex flex-col items-center justify-center">
          <h2 className="text-white text-2xl font-medium mb-4">Total Keuangan Kelas</h2>
          <p className="text-white text-6xl font-bold">Rp 1.500.000</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Goal Card */}
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <h2 className="text-[#1b1b1b] text-3xl font-bold mb-1">Goal</h2>
            <p className="text-gray-500 mb-6">Liburan ke Bira</p>

            <div className="flex justify-center">
              <div className="w-48 h-48 relative" ref={ref}>
                <svg style={{ height: 0, position: 'absolute' }}>
                  <defs>
                    <linearGradient id="goalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00D2D2" />
                      <stop offset="100%" stopColor="#06FF9F" />
                    </linearGradient>
                  </defs>
                </svg>
                <CircularProgressbar
                  value={progress}
                  text={`${progress}%`}
                  styles={{
                    path: {
                      stroke: "url(#goalGradient)",
                      strokeLinecap: "round",
                      transition: 'stroke-dashoffset 0.5s ease 0s',
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

          {/* Payment Card */}
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <h2 className="text-[#1b1b1b] text-3xl font-bold mb-8">Sudah Bayar</h2>

            <div className="flex justify-center items-center">
              <span className="text-[#01d5ce] text-6xl font-bold">24</span>
              <span className="text-6xl font-bold mx-4">/</span>
              <span className="text-[#1b1b1b] text-6xl font-bold">36</span>
            </div>

            <div className="text-center mt-4">
              <p className="text-2xl font-bold">Siswa</p>
              <p className="text-gray-500">Untuk Minggu ini</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

