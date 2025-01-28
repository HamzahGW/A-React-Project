import { FULL_ROUTES } from "@tx/util-models";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

interface heroProps {
  activeSlide: number;
}

export default function Hero(props: heroProps) {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <img
        style={{
          pointerEvents: "none",
          transform: `scale(${props.activeSlide == 0 ? 1 : 1.5}) translateY(${props.activeSlide == 0 ? 0 : -100}px)`,
          transition: "1500ms",
        }}
        src="https://thearchcapital.com//wp-content/uploads/2024/06/logo.svg"
        alt=""
      />
      <Link to={FULL_ROUTES.LANDING.brief}>
        <ChevronDown
          size={80}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        />
      </Link>
    </div>
  );
}
