import { useWordPressContent } from "@tx/data-access";
import { TitleContainer } from "@tx/ui-components";
import BackgroundWithTitle from "@tx/ui-components/src/BackgroundWithTitle/BackgroundWithTitle";
import { useLocale } from "@tx/util-hooks";
import { useEffect } from "react";
import Iframe from "react-iframe";
import { useNavigate } from "react-router";
export default function Jobs() {
  const { t } = useLocale();
  const { data, isLoading } = useWordPressContent("/form_link");

  useEffect(() => {
    if (!isLoading) {
      try {
        if (data && data) {
          location.href = data[0].acf.link;
        }
      } catch (error) {}
    }
  });

  return (
    <>
      <TitleContainer title={t("jobs")} />

      <div className="flex flex-row gap-2"></div>
      <div className="flex items-center justify-center py-24">
        <h1 className="text-xl md:text-4xl" dir="ltr">
          Directing....
        </h1>
      </div>
      <div className="sm:py-15 mx-auto max-w-7xl px-8 py-14 leading-6 sm:px-6 lg:px-8 "></div>
    </>
  );
}
