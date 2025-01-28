// TODO typesafe later

import { TCountry, TOptions } from "@tx/util-models";

export const handleOptions = (
  data: string | number,
  array: TOptions[] | TCountry[] | undefined,
  customValue?: string,
): {
  label: string;
  value: string;
} => {
  // optimize later
  if (typeof data !== "string")
    return {
      label: "",
      value: "",
    };
  if (typeof array === "undefined")
    return {
      label: "",
      value: data,
    };
  if (array.length === 0)
    return {
      label: "",
      value: data,
    };
  let filterObj;
  if (customValue) {
    filterObj = (array as any[]).find((e: any) => e[customValue] === data);
    return filterObj as any;
  } else {
    // value may be a number or a string so don't change ==
    filterObj = (array as TOptions[]).find((e) => e.value == data);
  }
  return {
    label: filterObj?.label || "",
    value: filterObj?.value || "",
  };
};

export default handleOptions;
