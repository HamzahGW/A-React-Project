import { useState } from "react";
import Hero from "./Hero";

import { Footer } from "@tx/lib";

import { NavBar, ScrollSlider } from "@tx/ui-components";
import Brief from "./Brief/Brief";
import Stats from "./Stats";
import { FULL_ROUTES } from "@tx/util-models";
import OurStory from "./OurStory";
import { useLocale } from "@tx/util-hooks";
import { links } from "@tx/lib/feature-components/Navbar/common";
import { Link } from "react-router-dom";

type Props = {};

export default function Home({}: Props) {
  const { t } = useLocale();
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <div
      className="bg-full absolute h-full w-full overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://thearchcapital.com//wp-content/uploads/2024/06/bg.png")',
      }}
    >
      <ScrollSlider
        activeSlide={activeSlide}
        duration={1500}
        onSlideChange={(e) => {
          setActiveSlide(e);
        }}
        slides={[
          //here you can modify the section of the page we deleted the first section with the logo
          /*{
            hash: FULL_ROUTES.LANDING.base,
            element: <Hero activeSlide={activeSlide} />,
          },*/
          {
            hash: FULL_ROUTES.LANDING.brief,
            element: <Brief activeSlide={activeSlide} />,
          },
          {
            hash: FULL_ROUTES.LANDING.stats,
            element: <Stats activeSlide={activeSlide} />,
          },
          {
            hash: FULL_ROUTES.LANDING.our_story,
            element: <OurStory />,
          },
          { hash: FULL_ROUTES.LANDING.footer, element: <Footer /> },
        ]}
      />
      <Link to={FULL_ROUTES.LANDING.base}>
        <img
          src="https://thearchcapital.com//wp-content/uploads/2024/06/tree_frame.svg"
          style={{
            opacity: activeSlide > 0 ? 1 : 0,
            filter: activeSlide > 1 ? "invert(100%)" : "invert(0%)",
            transition: "500ms ease-in-out",
          }}
          className="absolute left-1/2 top-10 h-20 -translate-x-1/2 md:cursor-pointer"
        />
      </Link>
    </div>
  );
}
