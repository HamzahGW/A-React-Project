import { translate } from "./i18n";

export const prettifyNumber = (
  number: number | string | undefined,
  isCurrency?: boolean,
) => {
  if (typeof number === "undefined") return number;
  return (
    new Intl.NumberFormat().format(number as number) +
    (" " + (isCurrency ? translate("riyal") : ""))
  );
};
