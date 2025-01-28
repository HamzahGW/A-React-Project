import { Link } from "react-router-dom";

interface GlowingCardProps {
  title?: string;
  image?: string;
  link?: string;
}

export function GlowingCard(props: GlowingCardProps) {
  return (
    <Link to={props.link ?? ""}>
      <div className="flex flex-col items-center justify-center gap-2">
        <p>{props.title ?? ""}</p>
        <div
          style={{ aspectRatio: "151.98 / 221.06" }}
          className="3xl:h-96 4xl:h-[768px] h-64 overflow-hidden rounded-md bg-slate-900"
        >
          <img
            src={props.image ?? ""}
            className="h-full w-full object-cover grayscale duration-300 hover:scale-110 hover:grayscale-0 md:cursor-pointer"
          />
        </div>
      </div>
    </Link>
  );
}
