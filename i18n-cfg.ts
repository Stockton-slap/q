export const i18n = {
  defaultLocale: "enRounds",
  locales: ["enRounds"],
} as const;

export type Locale = (typeof i18n)["locales"][number];
