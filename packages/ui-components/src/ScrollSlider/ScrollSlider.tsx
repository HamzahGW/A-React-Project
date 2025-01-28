import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { useBoolean } from "@tx/util-hooks";
import { useLocation } from "react-router-dom";

interface ScrollSliderProps {
  slides: { hash: string; element: React.ReactNode }[];
  duration: number;
  onSlideChange?: (activeSlide: number) => void;
  activeSlide?: number;
}

export function ScrollSlider({
  slides,
  duration,
  onSlideChange,
  activeSlide,
}: ScrollSliderProps) {
  const divRef = useRef<HTMLDivElement>(null);
  // const [scrollDirection, setScrollDirection] = useState("none");
  const [scrollSlide, setScrollSlide] = useState(0);
  const canScroll = useBoolean(true);
  const { hash } = useLocation();
  useLayoutEffect(() => {
    const hashes = slides.map((item) => item.hash);
    for (const i in hashes) {
      if (hashes[i].replace("/", "") == hash) {
        activeSlide = parseInt(i);
        setScrollSlide(activeSlide);
        if (onSlideChange) {
          location.hash = slides[activeSlide ?? 0].hash;
          onSlideChange(activeSlide ?? 0);
        }
        break;
      } else {
        // alert(`${hash} - ${hashes[i].replace("/", "")}`);
      }
    }
  }, [hash]);

  useEffect(() => {
    setScrollSlide(activeSlide ?? 0);
    if (onSlideChange) {
      location.hash = slides[activeSlide ?? 0].hash;
      onSlideChange(activeSlide ?? 0);
    }
  }, [activeSlide]);

  useEffect(() => {
    const handleScrollDirection = (direction: "up" | "down") => {
      if (canScroll.value) {
        canScroll.setFalse();
        setTimeout(() => canScroll.setTrue(), duration);

        const newScrollSlide = scrollSlide + (direction === "up" ? -1 : 1);
        const boundedScrollSlide = Math.max(
          0,
          Math.min(slides.length - 1, newScrollSlide),
        );
        setScrollSlide(boundedScrollSlide);
        // setScrollDirection(direction);
        onSlideChange?.(boundedScrollSlide);
      }
    };

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      handleScrollDirection(event.deltaY < 0 ? "up" : "down");
    };

    let touchStartY = 0;
    const handleTouchStart = (event: TouchEvent) =>
      (touchStartY = event.touches[0].clientY);
    const handleTouchMove = (event: TouchEvent) => {
      event.preventDefault();
      handleScrollDirection(
        event.touches[0].clientY < touchStartY ? "down" : "up",
      );
    };

    if (divRef.current) {
      divRef.current.addEventListener("wheel", handleWheel, { passive: false });
      divRef.current.addEventListener("touchstart", handleTouchStart, {
        passive: false,
      });
      divRef.current.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
    }

    return () => {
      if (divRef.current) {
        divRef.current.removeEventListener("wheel", handleWheel);
        divRef.current.removeEventListener("touchstart", handleTouchStart);
        divRef.current.removeEventListener("touchmove", handleTouchMove);
      }
    };
  }, [slides.length, duration, canScroll, onSlideChange, scrollSlide]);

  return (
    <div
      ref={divRef}
      className="absolute flex h-full w-full flex-col items-center justify-center gap-10"
    >
      {slides.map((item, index) => (
        <div
          key={index}
          className="absolute h-full w-full ease-in-out"
          style={{
            transform: `translateY(${100 * (index - scrollSlide)}%)`,
            transition: `${duration}ms`,
          }}
        >
          {item.element}
        </div>
      ))}
    </div>
  );
}
