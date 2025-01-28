import { useWordPressContent } from "@tx/data-access";
import AnimatedNumber from "@tx/ui-components/src/AnimatedNumber";
import { useLocale } from "@tx/util-hooks";
import { FULL_ROUTES } from "@tx/util-models";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

interface StatsProps {
  activeSlide: number;
}

export default function Stats(props: StatsProps) {
  const { t, i18n } = useLocale();
  const { data } = useWordPressContent("/stats");
  return (
    <div className="bg-arch-green relative h-full w-full overflow-hidden">
      <img
        style={{
          zIndex: 0,
          pointerEvents: "none",
          top:
            props.activeSlide == 2
              ? 0
              : props.activeSlide < 2
                ? "-100%"
                : "100%",
          transition: "1500ms",
          transform: `scale(${props.activeSlide == 2 ? 1 : 1.2})`,
        }}
        //stats Background commented out
        //src="https://thearchcapital.com//wp-content/uploads/2024/06/logo-bg.svg"
        className="absolute right-0"
      />
      <div className="  absolute flex h-full w-full flex-col items-center justify-center overflow-y-auto p-10 text-white md:p-40">
        <h1 className="mb-10 text-5xl md:text-8xl">{t("stats")}</h1>
        <h2 className="text-center md:text-xl">
          {t("explore_key_statistics")}
        </h2>

        <div className="mt-20 flex flex-col flex-wrap items-center justify-center gap-5 md:flex-row md:gap-20">
          {data?.map((item, index) => (
            <div
              key={index}
              className="gap flex-col items-center justify-center"
            >
              <p className="text-arch-yellow mb-2 text-center text-3xl md:text-6xl">
                <AnimatedNumber
                  value={
                    props.activeSlide >= 2 ? parseFloat(item.acf.value) : 0
                  }
                  duration={500}
                  condition={true}
                />
                {item.acf.percentage && "%"}
              </p>
              <p className="w-64 text-center md:text-xl">
                {i18n.language == "ar" ? item.acf.name_ar : item.acf.name}
              </p>
            </div>
          ))}
        </div>
        <Link to={FULL_ROUTES.LANDING.our_story}>
          <ChevronDown
            color="white"
            size={80}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          />
        </Link>
      </div>
    </div>
  );
}
