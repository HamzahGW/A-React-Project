import React, { ReactNode } from "react";
import { Autoplay, Pagination, SwiperOptions } from "swiper";
import {
  Swiper,
  SwiperProps,
  SwiperSlide,
  SwiperSlideProps,
} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Carousel.css";
import { cn } from "@tx/util-helpers";

export interface ICarouselBreakpoints {
  [key: number]: {
    slidesPerView: number;
    spaceBetween: number;
  };
  [key: string]: {
    slidesPerView: number;
    spaceBetween: number;
  };
}

type Props = {
  children: ReactNode;
  breakpoints?: ICarouselBreakpoints;
  indicatorColor?: "primary" | "white";
  className?: string;
} & SwiperProps;

export function Carousel({
  breakpoints,
  className,
  children,
  indicatorColor = "primary",
  ...props
}: Props) {
  // temp | TODO: update to modules css later or tailwind
  const cls = "carousel";
  return (
    <div>
      <Swiper
        dir="rtl"
        spaceBetween={10}
        //   onActiveIndexChange={handleChange}
        modules={[Pagination, Autoplay]}
        breakpoints={breakpoints}
        slidesPerView={1}
        className={cn(
          cls + "Indicatorprimary",
          className,
          indicatorColor === "white" && cls + "IndicatorWhite",
        )}
        {...props}
      >
        {children}
      </Swiper>
    </div>
  );
}

export function CarouselSlide({
  children,
  ...props
}: { children: ReactNode } & SwiperSlideProps) {
  return <SwiperSlide {...props}>{children}</SwiperSlide>;
}

CarouselSlide.displayName = "SwiperSlide";
