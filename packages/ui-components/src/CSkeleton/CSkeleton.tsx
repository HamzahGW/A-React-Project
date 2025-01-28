import Skeleton, { SkeletonProps } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export function CSkeleton(props: SkeletonProps) {
  return (
    <div className={props.className}>
      <Skeleton {...props} className={"h-full w-full"} />
    </div>
  );
}

export default CSkeleton;
