import { cn } from "@tx/util-helpers";
import Button from "../Button/Button";
import Text from "../Text/Text";

type Props = {
  src: string;
  buttonLink?: string;
  text: string;
  buttonText?: string;
  className?: string;
  imgClassName?: string;
};

export function EmptyPlaceholder({
  src,
  buttonLink,
  text,
  buttonText,
  className,
  imgClassName,
}: Props) {
  return (
    <div className={cn("flex flex-col items-center gap-4", className)}>
      <img
        src={src}
        className={cn("w-96 max-w-[70%]", imgClassName)}
        role="presentation"
        alt="empty placeholder"
      />
      <Text className="font-medium">{text}</Text>
      {buttonLink && (
        <Button to={buttonLink} className="px-6">
          {buttonText}
        </Button>
      )}
    </div>
  );
}

export default EmptyPlaceholder;
