import InWalletModal from "./modal";
import IncomeAndExpense from "./incomeAndExpense";
import { Link, useLocation } from "react-router";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import GridCard from "../../components/grid-card";
import TitleWithPath from "../../components/TitleWithPath";
import UserPageLayout from "../../components/userPageLayout";

const Page = () => {
  const currentPath = useLocation();
  const [isDepositModalOpen, setDepositModalOpen] = useState(false);
  const [isWithdrawModalOpen, setWithdrawModalOpen] = useState(false);
  const closeModal = () => {
    setDepositModalOpen(false);
    setWithdrawModalOpen(false);
  };
  return (
    <>
      <UserPageLayout>
        <TitleWithPath currentPath={currentPath.pathname} previousPath="Dashboard" />

        <div className="grid grid-cols-1 gap-6">
          {/* wallet */}
          <GridCard>
            {/* Group Name & Records */}
            <div className="flex justify-between">
              <h2 className="font-bold text-2xl md:text-3xl ">
                Kelas X RPL II
              </h2>
              <Link
                to={"/records"}
                className="group  font-bold text-sm md:text-2xl md:flex hidden text-secondary  items-center "
              >
                Records{" "}
                <ChevronRight
                  size={30}
                  className="group-hover:text-black duration-300"
                />
              </Link>

              <Link to={"/records"} className="font-bold text-sm md:text-2xl md:hidden flex text-secondary  items-center ">
                <h2 className="">
                  <ChevronRight size={30} />
                </h2>
              </Link>
            </div>

            {/* Manager */}
            <div className="mb-5">
              <h2 className="font-bold text-2xl md:text-3xl   text-tertiary">
                Pengelola
              </h2>
              <h2 className="font-bold text-3xl sm:text-4xl  text-secondary">
                Khafifah Ramadhani
              </h2>
            </div>

            {/* Count and any option */}
            <div className="bg-gradient-to-t from-[#66ffc4] to-[#00D2D2] from-5% to-110% rounded-xl lg:rounded-3xl px-6 py-4 md:px-12 md:py-8   flex justify-center sm:justify-between ">
              {/* Total / Count */}
              <div className="">
                <h2 className="text-white text-xl sm:text-3xl lg:text-6xl font-medium mb-3">
                  Total Keuangan Kelas
                </h2>
                <p className="text-white font-bold text-4xl sm:text-4xl lg:text-7xl ">
                  Rp 1.500.000
                </p>
              </div>

              {/* Option / desktop / more */}
              <div className="hidden sm:flex gap-2">
                {/* deposit */}
                <button
                  onClick={() => setDepositModalOpen(true)}
                  className="flex flex-col items-center justify-center cursor-pointer duration-500 p-3 hover:bg-white group rounded-lg hover:rounded-2xl relative"
                >
                  <div className="relative w-[75px] h-[75px] mb-4">
                    <div
                      className="w-full h-full bg-white group-hover:bg-[#01D4CF] transition-all duration-300"
                      style={{
                        WebkitMaskImage: `url('/assets/icon/deposit.svg')`,
                        maskImage: `url('/assets/icon/deposit.svg')`,
                        WebkitMaskSize: "contain",
                        maskSize: "contain",
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                        WebkitMaskPosition: "center",
                        maskPosition: "center",
                      }}
                    />
                  </div>

                  <h2 className="text-white text-base md:text-2xl font-medium mt-auto group-hover:text-[#01D4CF]">
                    Deposit
                  </h2>
                </button>

                {/* withdraw */}
                <button
                  onClick={() => setWithdrawModalOpen(true)}
                  className="flex flex-col items-center justify-center cursor-pointer hover:bg-white duration-500 p-3 group rounded-lg hover:rounded-2xl relative"
                >
                  <div className="relative w-[75px] h-[75px] mb-4">
                    <div
                      className="w-full h-full bg-white group-hover:bg-[#01D4CF] transition-all duration-300"
                      style={{
                        WebkitMaskImage: `url('/assets/icon/withdraw.svg')`,
                        maskImage: `url('/assets/icon/withdraw.svg')`,
                        WebkitMaskSize: "contain",
                        maskSize: "contain",
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                        WebkitMaskPosition: "center",
                        maskPosition: "center",
                      }}
                    />
                  </div>

                  <h2 className="text-white text-base md:text-2xl font-medium mt-auto group-hover:text-[#01D4CF]">
                    Withdraw
                  </h2>
                </button>
              </div>z
            </div>

            {/* any option in mobile */}
            <div className="sm:hidden flex  gap-6 mt-5">
              <button
                onClick={() => setDepositModalOpen(true)}
                className="flex flex-col cursor-pointer items-center justify-center duration-500 p-3 bg-gradient-to-t from-[#66ffc4] to-[#00D2D2]  from-5% to-110% group rounded-lg hover:rounded-2xl relative"
              >
                <div className="relative w-[40px] h-[40px] mb-4">
                  <div
                    className="w-full h-full bg-white group-hover:bg-[#525F7F] transition-all duration-300"
                    style={{
                      WebkitMaskImage: `url('/assets/icon/deposit.svg')`,
                      maskImage: `url('/assets/icon/deposit.svg')`,
                      WebkitMaskSize: "contain",
                      maskSize: "contain",
                      WebkitMaskRepeat: "no-repeat",
                      maskRepeat: "no-repeat",
                      WebkitMaskPosition: "center",
                      maskPosition: "center",
                    }}
                  />
                </div>

                <h2 className="text-white text-base md:text-2xl font-medium  group-hover:text-[#525F7F]">
                  Deposit
                </h2>
              </button>

              {/* withdraw */}
              <button
                onClick={() => setWithdrawModalOpen(true)}
                className="flex flex-col items-center cursor-pointer justify-center bg-gradient-to-t from-[#66ffc4] to-[#00D2D2] from-5% to-110% duration-500 p-3 group rounded-lg hover:rounded-2xl relative"
              >
                <div className="relative w-[35px] h-[35px] mb-4">
                  <div
                    className="w-full h-full bg-white group-hover:bg-[#525F7F] transition-all duration-300"
                    style={{
                      WebkitMaskImage: `url('/assets/icon/withdraw.svg')`,
                      maskImage: `url('/assets/icon/withdraw.svg')`,
                      WebkitMaskSize: "contain",
                      maskSize: "contain",
                      WebkitMaskRepeat: "no-repeat",
                      maskRepeat: "no-repeat",
                      WebkitMaskPosition: "center",
                      maskPosition: "center",
                    }}
                  />
                </div>

                <h2 className="text-white text-base md:text-2xl font-medium  group-hover:text-[#525F7F]">
                  Withdraw
                </h2>
              </button>
            </div>
          </GridCard>

          {/* Two items in a row below */}
          <div className="grid md:grid-cols-2 gap-6">
            <Link to={""}></Link>

            <Link to={""}></Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5 md:gap-10 items-start">
          <IncomeAndExpense />
        </div>
      </UserPageLayout>

      <InWalletModal
        closeModal={closeModal}
        isDepositModalOpen={isDepositModalOpen}
        isWithdrawModalOpen={isWithdrawModalOpen}
      />
    </>
  );
};

export default Page;
