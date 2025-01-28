import { useWordPressContent } from "@tx/data-access";
import { TitleContainer } from "@tx/ui-components";
import { useLocale } from "@tx/util-hooks";

export default function History() {
  const { data } = useWordPressContent("/our_history");
  const { t, i18n } = useLocale();

  return (
    <>
      <TitleContainer title={t("our_history")} />
      <div className=" mx-auto max-w-7xl px-8 py-14 leading-6 sm:px-6 lg:px-8 ">
        {data?.map((item, index) => (
          <div className={"flex flex-row gap-5"}>
            <div className={"flex flex-col items-center gap-2"}>
              <div
                className={
                  "text-arch-green m-0 flex w-20 items-center justify-center p-0 text-center text-2xl"
                }
              >
                {item.acf.year}
              </div>
              {index != data.length - 1 && (
                <div
                  className={"bg-arch-green w-1 flex-grow rounded-full"}
                ></div>
              )}
            </div>

            {i18n.language == "ar" && (
              <div
                className="mb-10 rounded-md bg-gray-50 p-4"
                dangerouslySetInnerHTML={{ __html: item.acf.content_ar }}
              />
            )}
            {i18n.language == "en" && (
              <div
                className="mb-10 rounded-md bg-gray-50 p-4"
                dangerouslySetInnerHTML={{ __html: item.acf.content }}
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
}
