import { useWordPressContent } from "@tx/data-access";
import { TitleContainer } from "@tx/ui-components";
import BackgroundWithTitle from "@tx/ui-components/src/BackgroundWithTitle/BackgroundWithTitle";
import { useLocale } from "@tx/util-hooks";

export default function Cookies() {
  const { t } = useLocale();
  return (
    <>
      <TitleContainer title={t("cookies")} />
      <div className="sm:py-15 mx-auto max-w-7xl px-8 py-14 leading-6 sm:px-6 lg:px-8 ">
        <div className="py-6">
          <h1 className="mb-2 text-3xl font-bold">{t("cookies")}</h1>
          <p className="text-gray-600">{t("cookies_des")}</p>
        </div>
      </div>
    </>
  );
}
