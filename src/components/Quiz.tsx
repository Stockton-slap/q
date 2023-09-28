"use client";

import Link from "next/link";
import React from "react";

export default function Quiz({ rounds }: { rounds: any }) {
  return (
    <ul className="flex gap-[20px] p-[50px]">
      {rounds.enRounds.map((round: any) => {
        return (
          <Link href={`/quiz/${round.id}`} key={round.id}>
            <li className="p-[20px] bg-[#954] rounded-[15px] w-[200px]">
              <p>Round #{round.id}</p>
              <p>Name: {round.title}</p>
            </li>
          </Link>
        );
      })}
    </ul>
  );
}
