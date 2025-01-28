import { useWordPressContent } from "@tx/data-access";
import { TitleContainer } from "@tx/ui-components";
import { useLocale } from "@tx/util-hooks";

export default function WealthManagement() {
  const { t, i18n } = useLocale();
  const { data, isLoading } = useWordPressContent("/wealth_management");

  return (
    <>
      <TitleContainer title={t("wealth_management")} />
      <div className="sm:py-15 mx-auto flex min-h-full max-w-7xl flex-col gap-5 p-2 px-8 py-14 leading-6 sm:px-6 md:flex-row lg:px-8">
        {!isLoading && (
          <div className=" flex h-[384px] w-64 shrink-0 flex-grow	 items-center justify-center overflow-hidden rounded-md bg-gray-100 grayscale">
            <img src="https://thearchcapital.com//wp-content/uploads/2024/05/0_78955Rk4TO8tXG9L.webp" />
          </div>
        )}
        {data?.map((item) => (
          <div key={item.id}>
            {i18n.language == "ar" && (
              <div
                className="md:border-r-arch-orange min-h-full p-4 text-start md:border-r-4"
                dangerouslySetInnerHTML={{ __html: item.acf.content_ar }}
              />
            )}
            {i18n.language == "en" && (
              <div
                className="md:border-l-arch-orange min-h-full p-4 text-start md:border-l-4"
                dangerouslySetInnerHTML={{ __html: item.acf.content }}
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
}
