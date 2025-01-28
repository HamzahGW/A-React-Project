import { cn } from "@tx/util-helpers";
import { FaUserCircle } from "react-icons/fa";

interface Props {
  src?: string;
  width?: string;
  height?: string;
  color?: string;
  size?: string;
  className?: string;
}

export function Avatar({ src, width, height, color, className, size }: Props) {
  return (
    <div>
      <FaUserCircle className={cn("text-primary", className)} fontSize={size} />
    </div>
  );
}

export default Avatar;
