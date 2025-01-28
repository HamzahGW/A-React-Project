import { useWordPressContent } from "@tx/data-access";
import { TitleContainer } from "@tx/ui-components";
import BackgroundWithTitle from "@tx/ui-components/src/BackgroundWithTitle/BackgroundWithTitle";
import { useLocale } from "@tx/util-hooks";

export default function TermsAndConditions() {
  const { t } = useLocale();
  const termsAndConditions = [
    {
      title: t("term_1_title"),
      description: t("term_1_des"),
    },
    {
      title: t("term_2_title"),
      description: t("term_2_des"),
    },
    {
      title: t("term_3_title"),
      description: t("term_3_des"),
    },
  ];
  return (
    <>
      <TitleContainer title={t("terms_and_conditions")} />
      <div className="sm:py-15 mx-auto max-w-7xl px-8 py-14 leading-6 sm:px-6 lg:px-8 ">
        {termsAndConditions.map((term, index) => (
          <div key={index} className="py-6">
            <h1 className="mb-2 text-3xl font-bold">{term.title}</h1>
            <p className="text-gray-600">{term.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
