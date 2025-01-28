import { TitleContainer } from "@tx/ui-components";
import { useLocale } from "@tx/util-hooks";

export default function OrganizationChart() {
  const { t } = useLocale();

  return (
    <>
      <TitleContainer title={t("organisation_chart")} />
      <div className="sm:py-15 mx-auto max-w-7xl px-8 py-14 leading-6 sm:px-6 lg:px-8">
        <img
          src="https://thearchcapital.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-15-at-14.16.05-1.jpeg"
          alt=""
        />
      </div>
    </>
  );
}
