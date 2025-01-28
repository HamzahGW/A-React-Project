import { useWordPressContent } from "@tx/data-access";
import { TitleContainer } from "@tx/ui-components";
import BackgroundWithTitle from "@tx/ui-components/src/BackgroundWithTitle/BackgroundWithTitle";
import { useLocale } from "@tx/util-hooks";

export default function PrivacyPolicy() {
  const { t } = useLocale();
  const privacyPolicy = [
    {
      title: t("policy_1_title"),
      description: t("policy_1_des"),
    },
    {
      title: t("policy_2_title"),
      description: t("policy_2_des"),
    },
    {
      title: t("policy_3_title"),
      description: t("policy_3_des"),
    },
    {
      title: t("policy_4_title"),
      description: t("policy_4_des"),
    },
    {
      title: t("policy_5_title"),
      description: t("policy_5_des"),
    },
    {
      title: t("policy_6_title"),
      description: t("policy_6_des"),
    },
    {
      title: t("policy_7_title"),
      description: t("policy_7_des"),
    },
    {
      title: t("policy_8_title"),
      description: t("policy_8_des"),
    },
  ];
  return (
    <>
      <TitleContainer title={t("privacy_policy")} />
      <div className="sm:py-15 mx-auto max-w-7xl px-8 py-14 leading-6 sm:px-6 lg:px-8 ">
        {privacyPolicy.map((policy, index) => (
          <div key={index} className="py-6">
            <h1 className="mb-2 text-3xl font-bold">{policy.title}</h1>
            <p className="text-gray-600">{policy.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
