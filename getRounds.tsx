import { Locale, i18n } from "./i18n-cfg";

const rounds = {
  enRounds: () =>
    import("./src/questions/rounds.json").then((module) => module.default),
};

export const getRounds = async (locale: Locale) =>
  rounds[i18n.locales.includes(locale) ? locale : i18n.defaultLocale]();
