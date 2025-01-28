import { useWordPressContent } from "@tx/data-access";
import { TitleContainer } from "@tx/ui-components";
import { i18n } from "@tx/util-helpers";
import { useLocale } from "@tx/util-hooks";

export default function InvestmentBanking() {
  const { t } = useLocale();
  const { data, isLoading } = useWordPressContent("/investment_banking");

  return (
    <>
      <TitleContainer title={t("investment_banking")} />
      <div className="sm:py-15 mx-auto flex min-h-full max-w-7xl flex-col gap-5 p-2 px-8 py-14 leading-6 sm:px-6 md:flex-row lg:px-8">
        {!isLoading && (
          <div className="flex h-[384px] w-64 shrink-0 flex-grow	 items-center justify-center overflow-hidden rounded-md bg-gray-100 grayscale">
            <img src="https://thearchcapital.com//wp-content/uploads/2024/05/low-angle-photography-of-trees-at-daytime-iphone-12-pro.jpg" />
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
