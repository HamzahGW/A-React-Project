import { useWordPressContent } from "@tx/data-access";
import { useLocale } from "@tx/util-hooks";
import { FULL_ROUTES } from "@tx/util-models";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function OurStory() {
  const { t, i18n } = useLocale();
  const { data } = useWordPressContent("/our_story");
  return (
    <div className="bg-arch-orange flex h-full w-full flex-col items-center justify-center p-10 text-white">
      <h1 className="mb-10 text-5xl md:text-8xl">{t("our_story")}</h1>
      <p className="text-center md:px-[10%] md:text-xl">
        {data?.map((item) => (
          <>
            {i18n.language == "ar" && (
              <div
                dangerouslySetInnerHTML={{
                  __html: item.acf.content_for_landing_page_ar,
                }}
              />
            )}
            {i18n.language != "ar" && (
              <div
                dangerouslySetInnerHTML={{
                  __html: item.acf.content_for_landing_page,
                }}
              />
            )}
            <br />
            <Link to={FULL_ROUTES.OUR_STORY}>{t("read_more")}</Link>
          </>
        ))}
      </p>

      <Link to={FULL_ROUTES.LANDING.footer}>
        <ChevronDown
          color="white"
          size={80}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        />
      </Link>
    </div>
  );
}
