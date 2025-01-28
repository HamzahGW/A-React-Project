import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { z } from "zod";
import { makeZodI18nMap } from "zod-i18n-map";
import arZod from "zod-i18n-map/locales/ar/zod.json";
import enZod from "zod-i18n-map/locales/en/zod.json";

// import arTrn from "./assets/locales/ar/common.json";

// import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      ar: {
        zod: arZod,
        custom: {
          passwords_dont_match: "الرقم السري لا يتطابق",
          Required: "مطلوب",
          required: "مطلوب",
        },
      },
      en: {
        zod: enZod,
        custom: {
          passwords_dont_match: "passwords don't match",
          Required: "Required",
          required: "Required",
        },
      },
    },
    fallbackLng: "ar",
    debug: false,
    react: { useSuspense: true }, //this line
  });

z.setErrorMap(makeZodI18nMap({ ns: ["zod", "custom"] }));

type TModules = "common";

export function translate(
  name: string | string[],
  module: TModules = "common",
) {
  return i18n?.t(name, { ns: module });
}

// z.setErrorMap(makeZodI18nMap());

export { i18n };
