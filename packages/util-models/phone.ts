export type TPhone = {
  code:
    | {
        code: string;
        ar: string;
        dialCode: string;
        en: string;
      }
    | string;
  number: string;
};
