import React from "react";
import Text from "../Text/Text";

type Props = {
  list: {
    label: string;
    value: string | number;
  }[];
};

export function VerticalInfoList({ list }: Props) {
  return (
    <div>
      {list.map((item, index) => (
        <div
          key={index}
          className="odd:bg-Main flex justify-between rounded py-3 px-5"
        >
          <Text size="sm" color="Accent">
            {item.label}
          </Text>

          <Text size="sm" color="Accent">
            {item.value}
          </Text>
        </div>
      ))}
    </div>
  );
}

export default VerticalInfoList;
