import React, { useEffect, useState } from "react";

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  condition: boolean;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  duration = 500,
  condition,
}) => {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    if (!condition) {
      setDisplayValue(value);
      return;
    }

    const startValue = displayValue;
    const endValue = value;

    if (startValue === endValue) return;

    const stepCount = duration / 20; // Calculate how many steps in the animation
    const stepSize = (endValue - startValue) / stepCount; // The size of each step
    const stepInterval = duration / stepCount; // Time between each step for linear progression

    let currentStep = 0;
    const timer = setInterval(() => {
      setDisplayValue((prev) => {
        const nextValue = prev + stepSize;
        currentStep++;
        // Clear interval when the final step is reached or if calculation overshoots
        if (currentStep >= stepCount) {
          clearInterval(timer);
          return endValue; // Ensure final value is exact
        }
        return nextValue;
      });
    }, stepInterval);

    return () => clearInterval(timer);
  }, [value, duration, displayValue, condition]);

  return <span>{displayValue.toFixed(0)}</span>;
};

export default AnimatedNumber;
