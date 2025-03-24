"use client";
import TitleWithPath from "@/components/TitleWithPath";
import React from "react";
import { usePathname } from "next/navigation";
import UserPageLayout from "@/components/userPageLayout";
import Link from "next/link";
import GridCard from "@/components/grid-card";
import { ChevronRight, Notebook } from "lucide-react";

const Page = () => {
  const pathname = usePathname();

  return (
    <UserPageLayout>
      <TitleWithPath currentPath={pathname} previousPath="Dashboard" />

      <div className="grid grid-cols-1 gap-6">
        {/*  */}

        <GridCard>
          {/* Group Name & Records */}
          <div className="flex justify-between">
            <h2 className="font-bold text-2xl md:text-3xl ">Kelas X RPL II</h2>
            <h2 className="font-bold text-sm md:text-2xl md:flex hidden text-secondary  items-center ">
              Records <ChevronRight size={30} />
            </h2>
            <h2 className="font-bold text-sm md:text-2xl md:hidden flex text-secondary  items-center ">
              <ChevronRight size={30} />
            </h2>
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
          <div className="bg-gradient-to-t from-[#66ffc4] to-[#00D2D2] from-10% to-100% rounded-xl lg:rounded-3xl px-6 py-4 md:px-12 md:py-8   flex flex-col ">
            <h2 className="text-white text-xl md:text-4xl lg:text-4xl font-medium mb-3">
              Total Keuangan Kelas
            </h2>
            <p className="text-white font-bold text-2xl md:text-4xl lg:text-7xl ">
              Rp 1.500.000
            </p>
          </div>
        </GridCard>

        {/* Two items in a row below */}
        <div className="grid md:grid-cols-2 gap-6">
          <Link href={""}></Link>

          <Link href={""}></Link>
        </div>
      </div>
    </UserPageLayout>
  );
};

export default Page;
