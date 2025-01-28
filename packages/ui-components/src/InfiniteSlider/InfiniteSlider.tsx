import "./InfiniteSlider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

interface IProps {
  images: {
    src: string;
    alt: string;
  }[];
}

export function InfiniteSlider({ images }: IProps) {
  return (
    <div>
      <Swiper
        slidesPerView={1.3}
        speed={6000}
        spaceBetween={0}
        dir="ltr"
        allowTouchMove={false}
        centeredSlides
        grabCursor={false}
        freeMode
        autoplay={{
          delay: 10,
          disableOnInteraction: false,
        }}
        loop={true}
        noSwiping={true}
        breakpoints={{
          450: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Autoplay, EffectFade]}
        className="partnersSlider"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="my-auto">
            <img
              className="w-5/6 max-w-[10rem]"
              key={index}
              src={image.src}
              alt={image.alt}
            />
          </SwiperSlide>  
        ))}
      </Swiper>
    </div>
  );
}

export default InfiniteSlider;
