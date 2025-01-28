import { useLayoutEffect, useState } from "react";

export function useLocalStorage(props: {
  itemName: string;
  initialValue: string;
}): [string | null, (param: string) => void] {
  const [value, setValue] = useState<string | null>(props.initialValue);
  useLayoutEffect(() => {
    if (localStorage.getItem(props.itemName)) {
      setValue(localStorage.getItem(props.itemName));
    }
  }, []);
  function setItem(itemValue: string) {
    localStorage.setItem(props.itemName, itemValue);
    setValue(itemValue);
  }
  return [value, setItem];
}
