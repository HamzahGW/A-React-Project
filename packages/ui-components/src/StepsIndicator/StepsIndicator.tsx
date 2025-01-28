interface Props {
  // percentage: number;
  label: string;
  className?: string;
  currentStep: number;
  length: number;
}

export function StepsIndicator({
  label,
  currentStep,
  length,
  className,
}: Props) {
  const width = (currentStep / length) * 100;
  return (
    <div>
      <div
        className="mb-1 flex justify-end text-lg transition-[width] duration-500 ease-in-out md:text-xl"
        style={{ width: `${width}%` }}
      >
        {label}
      </div>
      <div>
        <div className="bg-primary relative h-2 w-full rounded-full bg-opacity-30 ">
          <div
            className={`transition-[width] duration-500 ${
              width === 0 ? "" : "relative"
            } bg-primary h-2 rounded-full`}
            style={{
              width: `${width}%`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default StepsIndicator;
