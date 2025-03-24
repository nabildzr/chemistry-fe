import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

type TitleWithPathProps = {
  currentPath?: String;
  previousPath?: String;
};

const TitleWithPath = ({ currentPath, previousPath }: TitleWithPathProps) => {
  const lowerCasePreviousPath = previousPath?.toLowerCase();

  return (
    <h1 className="t-3xl font-bold text-[#1b1b1b] mb-8 flex items-center">
      {/* path 1 */}
      <Link
        href={`/${lowerCasePreviousPath}`}
        className="flex transition-colors text-2xl duration-200 items-center  hover:text-[#525F7F]"
      >
        <ChevronLeft
          size={40}
          className="p-2 text-3xl  rounded-full cursor-pointer"
        />
        {previousPath}
      </Link>
      {/* path 2 */}
      <div className="flex  text-2xl  items-center">
        <ChevronLeft size={40} className="p-2 " />
        {currentPath?.replace(/^\//, '')?.replace(/^(.)/, match => match.toUpperCase())}
      </div>
    </h1>
  );
};

export default TitleWithPath;
