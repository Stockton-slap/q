import React from "react";
import { Locale } from "../../../../i18n-cfg";
import { getRounds } from "../../../../getRounds";
import RoundOne from "@/components/RoundOne/RoundOne";

export default async function RoundeOne({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const rounds = await getRounds(lang);

  return <RoundOne rounds={rounds.enRounds[0]} />;
}
