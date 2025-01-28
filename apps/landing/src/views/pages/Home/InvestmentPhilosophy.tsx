import { useWordPressContent } from "@tx/data-access";
import { TitleContainer } from "@tx/ui-components";
import { useLocale } from "@tx/util-hooks";

export default function InvestmentPhilosophy() {
  const { data } = useWordPressContent("/our_investment_philo");
  const { t, i18n } = useLocale();
  return (
    <>
      <TitleContainer title={t("investment_philosophy")} />
      <div className="sm:py-15 mx-auto max-w-7xl px-8 py-14 leading-6 sm:px-6 lg:px-8">
        {data?.map((item) => (
          <div key={item.id}>
            {i18n.language == "ar" && (
              <div
                className="text-center"
                dangerouslySetInnerHTML={{ __html: item.acf.content_ar }}
              />
            )}

            {i18n.language == "en" && (
              <div
                className="text-center"
                dangerouslySetInnerHTML={{ __html: item.acf.content }}
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
}
