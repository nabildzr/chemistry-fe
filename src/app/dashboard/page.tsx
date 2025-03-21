'use client'

import Image from "next/image"
import { CircularProgressbar } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-white">

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-[#1b1b1b] mb-8">Dashboard</h1>

        {/* Total Card */}
        <div className="bg-[#01d5ce] rounded-xl p-8 mb-8 text-center">
          <h2 className="text-white text-2xl font-medium mb-2">Total Keuangan Kelas</h2>
          <p className="text-white text-6xl font-bold">Rp 1.500.000</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Goal Card */}
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <h2 className="text-[#1b1b1b] text-3xl font-bold mb-1">Goal</h2>
            <p className="text-gray-500 mb-6">Liburan ke Bira</p>

            <div className="flex justify-center">
              <div className="w-48 h-48">
                <CircularProgressbar
                  value={75}
                  text={`75%`}
                  styles={{
                    path: {
                      stroke: "#01d5ce",
                      strokeLinecap: "round",
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

