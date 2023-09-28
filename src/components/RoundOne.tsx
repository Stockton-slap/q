"use client";

import React from "react";

export default function RoundOne({ rounds }: { rounds: any }) {
  return (
    <div>
      <h1>Round #{rounds.id}</h1>
      <ul>
        {rounds.questions.map((question) => (
          <li key={question.id}>{question.question}</li>
        ))}
      </ul>
      {/* {rounds.nums.map((num: any, i: any) => (
        <p key={i}>Question #{num}</p>
      ))} */}
    </div>
  );
}
