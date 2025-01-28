import { cn, isAtheer } from "@tx/util-helpers";

type Props = {
  list: {
    src: string;
    alt: string;
  }[];
};

export function SquaredContainer({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      className={cn(
        "before:content-['] before:bg-primary relative flex h-64 w-64 content-center items-center justify-center rounded-2xl bg-white before:absolute before:bottom-0 before:h-2 before:w-1/2 before:rounded-md",
        isAtheer() && "bg-primary",
      )}
    >
      <img className="w-36" src={src} alt={alt} />
    </div>
  );
}

export function SquaredContainerList({ list }: Props) {
  return (
    <div className="mx-auto grid grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] justify-items-center gap-10">
      {list.map((item, index) => (
        <div key={index}>
          <SquaredContainer src={item.src} alt={item.alt} />
        </div>
      ))}
    </div>
  );
}

export default SquaredContainerList;
