import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface GridCardProps {
  children: React.ReactNode;
  className?: string;
  padding?: string;
  isFull?: boolean;
}

const GridCard = ({
  children,
  className = "",
  padding = "p-6",
  isFull = false,
}: GridCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null); // Referensi ke elemen DOM

  useEffect(() => {
    // Animasi GSAP saat komponen dimount
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 50 }, // Awal: transparan dan di bawah
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" } // Akhir: muncul dan naik
    );
  }, []);

  return (
    <div
      ref={cardRef}
      className={`bg-white rounded-xl border border-gray-200 shadow-sm hover:bg-gray-50 hover:shadow-2xl duration-300 ${
        isFull ? "h-full" : ""
      } ${className} ${padding}`}
    >
      {children}
    </div>
  );
};

export default GridCard;