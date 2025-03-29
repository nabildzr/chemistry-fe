import TitleWithPathArrayProps from "@/types/titleWithPaths";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";



const TitleWithPath = ({ currentPath, previousPaths }: TitleWithPathArrayProps) => {
  return (
    <h1 className="t-3xl font-bold text-[#1b1b1b] mb-8 flex items-center">
      {/* Render semua previousPaths */}
      {previousPaths?.map((path, index) => {
        const lowerCasePath = path.toLowerCase();
        return (
          <React.Fragment key={index}>
            <Link
              href={`/${lowerCasePath}`}
              className="flex transition-colors text-base md:text-2xl  duration-200 items-center hover:text-[#525F7F]"
            >
              <ChevronLeft
                size={40}
                className="p-2 text-xl md:text-2xl rounded-full cursor-pointer"
              />
              {path}
            </Link>
         
          </React.Fragment>
        );
      })}
      {/* Current Path */}
      <div className="flex text-base md:text-2xl items-center">
        <ChevronLeft size={40} className="p-2" />
        {currentPath?.replace(/^\//, "")?.replace(/^(.)/, (match) =>
          match.toUpperCase()
        )}
      </div>
    </h1>
  );
};

export default TitleWithPath;