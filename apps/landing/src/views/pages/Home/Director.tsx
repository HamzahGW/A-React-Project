import { useWordPressContent, useWordPressPost } from "@tx/data-access";
import { TitleContainer } from "@tx/ui-components";
import { useLocale } from "@tx/util-hooks";
import { FULL_ROUTES } from "@tx/util-models";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";

export default function Director() {
  const { id } = useParams();
  const { t, i18n } = useLocale();
  const { data, isLoading } = useWordPressPost(
    `/board_of_directors/${parseInt(`${id}`)}`,
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !data?.acf.name_ar) {
      navigate(FULL_ROUTES.OUR_FOUNDERS.base);
    }
  }, [isLoading]);

  return (
    <>
      <TitleContainer title={t("our_founders")} />
      <div className="sm:py-15 mx-auto max-w-7xl px-8 py-14 leading-6 sm:px-6 lg:px-8">
        {!isLoading && data?.acf.name_ar && (
          <>
            <div className="flex flex-row items-center gap-10">
              <img
                className="aspect-square h-24 rounded-full bg-gray-100 md:h-64"
                src={data?.acf.image}
                // alt="director image"
              />
              <div className="flex flex-col">
                {i18n.language == "ar" && (
                  <h1 className="text-xl md:text-4xl">
                    {data?.acf.name_ar ?? "...."}
                  </h1>
                )}
                {i18n.language == "en" && (
                  <h1 className="text-xl md:text-4xl">
                    {data?.acf.name ?? "...."}
                  </h1>
                )}
                {i18n.language == "ar" && (
                  <h2 className="text-lg md:text-2xl">
                    ({data?.acf.postion_ar ?? "...."})
                  </h2>
                )}
                {i18n.language == "en" && (
                  <h2 className="text-lg md:text-2xl">
                    ({data?.acf.postion ?? "...."})
                  </h2>
                )}
              </div>
            </div>

            {i18n.language == "ar" && (
              <div
                className="html-content prose mt-10"
                dangerouslySetInnerHTML={{
                  __html: `${data?.acf.content_ar}`,
                }}
              />
            )}
            {i18n.language == "en" && (
              <div
                className="html-content prose mt-10"
                dangerouslySetInnerHTML={{
                  __html: `${data?.acf.content}`,
                }}
              />
            )}
          </>
        )}
      </div>
    </>
  );
}
