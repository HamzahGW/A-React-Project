import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { FULL_ROUTES } from "@tx/util-models";

type Props = {
  title: string;
};

export default function BackgroundWithTitle({ title }: Props) {
  return (
    <div className="bg-arch-green w-full text-left w-full p-12">
      <h1 className="p-5 text-3xl text-white">{title}</h1>
    </div>
  );
}
