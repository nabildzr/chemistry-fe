"use client";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  window.location.href = "/not-found";

  return (
    <>
      <div></div>
    </>
  );
}
