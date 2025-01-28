import parsePhoneNumber from "libphonenumber-js";

export type TParsePhone = {
  code: string;
  number: string;
};

export function parsePhone(number: string | undefined): TParsePhone {
  if (typeof number !== "string")
    return {
      code: "",
      number: number || "",
    };

  const phoneNumber = parsePhoneNumber(number);
  return {
    code: phoneNumber?.country || "",
    number: number || "",
  };
}

export function getNationalNumber(number: string): string {
  if (typeof number !== "string") return "";
  const phoneNumber = parsePhoneNumber(number);
  if (!phoneNumber) return "";
  return phoneNumber?.nationalNumber;
}
