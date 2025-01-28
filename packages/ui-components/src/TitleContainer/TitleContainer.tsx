// import { useMobileMode } from "@/hooks";
// import { Filter1 } from "./filter1";
// import { Filter2 } from "./filter2";

import { Filter1 } from "./filter1/Filter1";
import { Filter2 } from "./filter2/Filter2";

interface TitleContainerProps {
  title: string;
}

export function TitleContainer(props: TitleContainerProps) {
  return (
    <div
      className=" dynamic-flip relative w-full overflow-hidden p-20"
      style={{ background: "#f2f2f2" }}
    >
      <div
        className="z-0 opacity-75 md:opacity-100"
        style={{
          transform: "translate3d(0,0,0)",
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      >
        <Filter1 />
        <Filter2 />
      </div>
      <div
        className="fix-z"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          height: "100%",
          width: "100%",
          background: "linear-gradient(to right,#f2f2f2 50%, transparent 80%)",
        }}
      ></div>
      <div className="fix-z relative z-10">
        <p className="dynamic-flip dynamic-direction text-center text-4xl text-black md:text-6xl">
          <strong>{props.title}</strong>
        </p>
      </div>
    </div>
  );
}
