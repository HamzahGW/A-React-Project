import * as React from "react";
import { Eye, EyeOff } from "lucide-react";

import { cn } from "@tx/util-helpers";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "border-input ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring disabled:bg-muted flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed ",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export interface DebouncedInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  debounce?: number;
  onValueChange: (val: string) => void;
}

export const DebouncedInput = React.forwardRef<
  HTMLInputElement,
  DebouncedInputProps
>(({ className, type, debounce = 500, onChange, ...props }, ref) => {
  const [search, setSearch] = React.useState<string>();

  React.useEffect(() => {
    if (!debounce) return;
    const timeout = setTimeout(() => {
      if (props.onValueChange) props.onValueChange(search ?? "");
    }, debounce);

    return () => clearTimeout(timeout);
  }, [search]);

  React.useEffect(() => {
    if (!props.value) {
      setSearch("");
    }
  }, [props.value]);

  return (
    <input
      type={type}
      className={cn(
        "border-input ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring disabled:bg-muted flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed ",
        className,
      )}
      ref={ref}
      {...props}
      onChange={(e) => {
        setSearch(e.currentTarget.value);
      }}
      value={search}
    />
  );
});

export const PasswordField = React.forwardRef<HTMLInputElement, InputProps>(
  function PasswordField(props, ref) {
    // const { t } = useLocale();
    const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
    const toggleIsPasswordVisible = React.useCallback(
      () => setIsPasswordVisible(!isPasswordVisible),
      [isPasswordVisible, setIsPasswordVisible],
    );

    return (
      <div className="relative [&_.group:focus-within_.addon-wrapper]:border-neutral-300 [&_.group:hover_.addon-wrapper]:border-gray-400">
        <Input
          type={isPasswordVisible ? "text" : "password"}
          ref={ref}
          {...props}
          // className={cn(
          //   "mb-0 ltr:border-r-0 ltr:pr-10 rtl:border-l-0 rtl:pl-10",
          //   props.className,
          // )}
        />
        <button
          className="absolute bottom-0 h-9 text-gray-900 ltr:right-3 rtl:left-3"
          type="button"
          onClick={() => toggleIsPasswordVisible()}
        >
          {isPasswordVisible ? (
            <EyeOff className="h-4 stroke-[2.5px]" />
          ) : (
            <Eye className="h-4 stroke-[2.5px]" />
          )}
        </button>
      </div>
    );
  },
);

export interface NumberFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  helper: "currency";
}

export const NumberField = React.forwardRef<HTMLInputElement, NumberFieldProps>(
  function NumberField(props, ref) {
    // const { t } = useLocale();

    return (
      <div className="relative [&_.group:focus-within_.addon-wrapper]:border-neutral-300 [&_.group:hover_.addon-wrapper]:border-gray-400">
        <Input
          type={"number"}
          ref={ref}
          {...props}
          // className={cn(
          //   "mb-0 ltr:border-r-0 ltr:pr-10 rtl:border-l-0 rtl:pl-10",
          //   props.className,
          // )}
        />
        <span className="pointer-events-none absolute bottom-0 left-6 top-1/2 block -translate-x-1/2 -translate-y-1/2 select-none text-sm text-gray-900">
          ر.س
        </span>
      </div>
    );
  },
);

export { Input };
