import React from "react";
import { Locale } from "../../../i18n-cfg";
import { getRounds } from "../../../getRounds";
import Quiz from "@/components/Quiz";

export default async function QuizPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const rounds = await getRounds(lang);

  return <Quiz rounds={rounds} />;
}
