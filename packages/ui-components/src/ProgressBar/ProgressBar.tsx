export function ProgressBar({
  percentage,
  hideText,
}: {
  percentage: string | undefined;
  hideText?: boolean;
}) {
  const pVal = parseFloat(percentage?.split("%")?.[0] || "0");
  return (
    <div dir="ltr">
      <div className="bg-primary relative mt-4 h-10 w-full rounded-lg bg-opacity-30">
        <div
          className={`${
            pVal === 0 || pVal === Infinity || Number.isNaN(pVal)
              ? ""
              : "relative"
          } bg-primary h-10 rounded-lg`}
          style={{
            width:
              pVal === Infinity || Number.isNaN(pVal)
                ? 0
                : pVal >= 100
                ? "100%"
                : pVal <= 15 && pVal !== 0
                ? "15%"
                : percentage,
          }}
        >
          {!hideText && (
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
              {pVal === Infinity || Number.isNaN(pVal) ? "0%" : percentage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
