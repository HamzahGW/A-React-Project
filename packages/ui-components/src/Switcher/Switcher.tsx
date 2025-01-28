import { Control, FieldValues, Path, useController } from "react-hook-form";
import Button from "../Button/Button";
import { cn } from "@tx/util-helpers";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Text from "../Text/Text";

interface IProps<TFormValues extends FieldValues> {
  buttons?: {
    name: string;
    label: string;
  }[];
  handleSwitch?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isConnected?: boolean;
  name?: Path<TFormValues>;
  control?: Control<TFormValues>;
  isLink?: boolean;
  selected?: string;
  className?: string;
  containerClassName?: string;
  label?: string;
  isDisabled?: boolean;
  // isBooleanOptions?: boolean;
}
const booleanOptions = [
  { name: "true", label: "نعم" },
  { name: "false", label: "لا" },
];
// @ When using Control you must provide a default value
export function Switcher<TFormValues extends FieldValues>({
  buttons,
  handleSwitch,
  isConnected,
  selected,
  className,
  containerClassName,
  isLink,
  label,
  isDisabled,
  name,
  control,
}: // isBooleanOptions
IProps<TFormValues>) {
  // buttons Eg: [{ name: 'cards', label: 'البطاقات' }]
  const btnControl =
    name && control
      ? useController({
          control,
          name: name,
        })
      : undefined;
  // selected Eg: 'cards'

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (control && btnControl) {
      btnControl.field.onChange(event.currentTarget.name);
      return;
    }
    if (event.currentTarget.name === selected) return;
    if (handleSwitch) handleSwitch(event);
  };

  if (isConnected) {
    return (
      <div>
        {label && (
          <Text className="mb-3" color="Accent">
            {label}
          </Text>
        )}
        <div
          aria-disabled={isDisabled}
          className={cn(
            "shadow-primary inline-flex rounded-lg shadow-[0_0_0_1.4px]",
            isDisabled && "shadow-slate-300",
            containerClassName,
          )}
        >
          {(!buttons ? booleanOptions : buttons).map(
            ({ name: btnName, label }, i) => (
              <>
                <button
                  key={i}
                  disabled={isDisabled}
                  type="button"
                  name={btnName} // button name is used for logic
                  onClick={handleClick}
                  className={cn(
                    "text-primary rounded-md px-4 py-2 ",
                    btnName === selected && "bg-primary text-white ",
                    btnControl?.field &&
                      btnControl.field.value.toString() === btnName &&
                      "bg-primary text-white disabled:bg-slate-300",
                    className,
                  )}
                >
                  {/* Button Label is used for display */}
                  {label}
                </button>
              </>
            ),
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={cn("flex flex-wrap gap-4", containerClassName)}>
      {buttons?.map(({ name, label }, i) => (
        <Button
          key={i}
          name={name} // button name is used for logic
          to={isLink ? (name as any) : undefined}
          variant={name === selected ? "primary" : "primary-Outline"}
          onClick={isLink ? undefined : handleClick}
          className={className}
        >
          {/* Button Label is used for display */}
          {label}
        </Button>
      ))}
    </div>
  );
}

export default Switcher;
