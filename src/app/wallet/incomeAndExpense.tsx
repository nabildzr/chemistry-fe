import GridCard from "@/components/grid-card";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const IncomeAndExpense = () => {
  return (
    <>
      <GridCard padding="p-3 md:p-6">
        <Link href="/income" className=" hover:text-[#525F7F] duration-300 ">
          <div className="font-bold text-1xl md:text-3xl flex justify-between items-center">
            Pemasukan{" "}
            <ChevronRight className=" hidden md:block duration-300" size={30} />
            <ChevronRight className="block md:hidden " size={20} />
          </div>
        </Link>

        <h2 className="font-bold text-2xl md:text-3xl text-[#888988]">Maret</h2>

        <hr className="border-t my-3" />

        {/* Content */}
        <div className="">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-1xl md:text-2xl">Joshua Timothy</p>
              <p className="text-1xl md:text-xl">21 Maret 2024</p>
            </div>
            <p className="text-1xl  hidden md:block md:text-2xl">Rp140.000</p>
          </div>
        </div>
      </GridCard>

      <GridCard padding="p-3 md:p-6">
        <Link href="/expense" className=" hover:text-[#525F7F] duration-300 ">
          <div className="font-bold text-1xl md:text-3xl flex justify-between items-center">
            Pengeluaran{"   "}
            <ChevronRight className="hidden md:block " size={30} />
            <ChevronRight className=" block md:hidden " size={20} />
          </div>
        </Link>

        <h2 className="font-bold text-2xl md:text-3xl text-[#888988]">April</h2>

        <hr className="border-t my-3" />

        {/* Content */}
        <div className="">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-1xl md:text-2xl">Beli Tisu</p>
              <p className="text-1xl md:text-xl">21 Maret 2024</p>
            </div>
            <p className="text-1xl hidden md:block md:text-2xl">Rp140.000</p>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-1xl md:text-2xl">
                Beli Perlengkapan
              </p>
              <p className="text-1xl md:text-xl">18 Maret 2024</p>
            </div>
            <p className="text-1xl hidden md:block md:text-2xl">Rp14.000</p>
          </div>
        </div>
      </GridCard>
    </>
  );
};

export default IncomeAndExpense;
