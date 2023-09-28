"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function HomePage() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/quiz");
  };

  return (
    <div className="flex justify-center items-center p-[300px] flex-col">
      <p className="text-[60px] font-[900]">Welcome to QUIZZLIES!</p>
      <button
        type="button"
        className="border-2 border-[#000] rounded-[15px] py-[20px] px-[40px] font-[500] text-[20px] mt-[80px] bg-[#992]"
        onClick={handleClick}
      >
        Start quiz
      </button>
    </div>
  );
}
