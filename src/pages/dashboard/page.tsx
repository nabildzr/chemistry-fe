import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import UserPageLayout from "../../components/userPageLayout";
import { Link } from "react-router";
import GridCard from "../../components/grid-card";

export default function DashboardPage() {
  const [progress, setProgress] = useState(0);
  const { ref } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView) {
        setProgress(75);
      }
    },
  });
  return (
    <>
      <UserPageLayout>
        <h1 className="text-3xl font-bold text-[#1b1b1b] mb-8">Dashboard</h1>

        {/* Total Card */}
        <div className="bg-gradient-to-t from-[#66ffc4] to-[#00D2D2] from-10% to-100% rounded-xl p-8 mb-8 flex flex-col items-center justify-center">
          <h2 className="text-white h3 mb-4">Total Keuangan Kelas</h2>
          <p className="text-white h2">Rp 1.500.000</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Goal Card */}
          <Link to={"/goal"}>
            <GridCard className="" isFull={true}>
              <h2 className="text-[#1b1b1b] text-3xl font-bold mb-1">Goal</h2>
              <p className="text-gray-500 mb-6">Liburan ke Bira</p>

              <div className="flex h-full justify-center">
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
            </GridCard>
          </Link>

          {/* Payment Card */}
          <Link to={"/wallet"}>
            <GridCard className="" isFull={true}>
              {/* title */}
              <h2 className="text-[#1b1b1b] h4 text-left">Sudah Bayar</h2>

              <div className="flex flex-col items-center justify-center h-50  ">
                <div className="flex flex-col items-center justify-center  h-full">
                  {/* content */}
                  <div className="flex justify-center items-center mb-4">
                    <span className="text-[#01d5ce] h2 self-start mt-1">
                      24
                    </span>
                    <span className="font-bold text-6xl md:text-7xl lg:text-9xl font-mono ">
                      /
                    </span>

                    <span className="text-[#1b1b1b] h2 self-end mb-1">36</span>
                  </div>

                  <div className="text-center">
                    <p className="text-2xl font-bold">Siswa</p>
                    <p className="text-gray-500">Untuk Minggu ini</p>
                  </div>
                </div>
              </div>
            </GridCard>
          </Link>
        </div>
      </UserPageLayout>
    </>
  );
}
