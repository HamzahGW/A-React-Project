import { isValidPhoneNumber } from "libphonenumber-js";
import { z } from "zod";

import { translate } from "../i18n";

const allowedChars = /^[a-zA-Z0-9#?!@$%^_&*]*$/;
const atLeastOneCapital = /^(?=.*?[A-Z])/;
const atLeastOneSmall = /^(?=.*?[a-z])/;
const atLeastOneDigit = /^(?=.*?[0-9])/;
const atLeastOneSpecialChar = /^(?=.*?[#?!@$%^&_*])/;

export const commonSchemas = {
  STRING: z.string(),
  NUMBER: z.number(),
  EMAIL: z
    .string({
      required_error: "حقل مطلوب",
    })
    .email({ message: "الرجاء ادخال بريد الكتروني صحيح" }),
  DATE: z.date(),
  //   PHONE: phoneValidation("رقم الجوال", "رقم جوال صحيح"),
  PASSWORD: z
    .string({
      required_error: "حقل مطلوب",
    })
    .refine(
      (value) => allowedChars.test(value),
      "يجب أن يتكون من أحرف انجليزية و رموز و أرقام فقط",
    )
    .refine((value) => atLeastOneCapital.test(value), "حرف واحد كبير عالاقل")
    .refine((value) => atLeastOneSmall.test(value), "حرف واحد صغير عالاقل")
    .refine((value) => atLeastOneDigit.test(value), "رقم واحد عالاقل")
    .refine(
      (value) => atLeastOneSpecialChar.test(value),
      "رمز #$%^*&!#@ واحد على الأقل",
    ),
};

export const validateString = z.string({
  required_error: "حقل مطلوب",
});

export const validateEmail = z.string().email({
  message: "أدخل ايميل صحيح",
});

export const validateNationalId = z
  .string({ required_error: translate("Required") })
  .max(10)
  .regex(new RegExp(/^[0-9]*$/)); // it is a function so we can lazy load phone

export const mapLangFields = z.object({
  ar: validateString.nonempty(),
  en: validateString.nonempty(),
});

export function validatePhone() {
  return z.string().refine(
    (val) => {
      const isPhoneValid = isValidPhoneNumber(val, { defaultCountry: "SA" });
      return isPhoneValid;
    },
    {
      message: "أدخل رقم صحيح",
    },
  );
}

export const validatePassword = commonSchemas.PASSWORD;
