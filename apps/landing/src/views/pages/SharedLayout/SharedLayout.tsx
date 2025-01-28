import React, { useEffect } from "react";
import { Footer } from "@tx/lib";
import { NavBar } from "@tx/ui-components";
import { useLocalStorage, useLocale } from "@tx/util-hooks";
import { FULL_ROUTES } from "@tx/util-models";
import { Outlet } from "react-router";
import GlobalFooter from "../Home/GlobalFooter";

export default function SharedLayout() {
  const { t } = useLocale();
  const { i18n } = useLocale();
  const [lang] = useLocalStorage({ itemName: "language", initialValue: "ar" });

  useEffect(() => {
    i18n.changeLanguage(`${lang}`);
  }, [lang]);

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-grow" dir={`${lang}` == "ar" ? "rtl" : "ltr"}>
        <Outlet />
      </div>
      <GlobalFooter />
      <NavBar
        links={[
          {
            label: t("home"),
            value: "/#" + FULL_ROUTES.LANDING.base,
          },
          {
            label: t("who_are_we"),
            isSubMenu: true,
            options: [
              {
                label: t("our_history"),
                value: FULL_ROUTES.OUR_HISTORY,
              },
              {
                label: t("investment_philosophy"),
                value: FULL_ROUTES.INVESTMENT_PHILOSOPHY,
              },
              {
                label: t("board_members"),
                value: FULL_ROUTES.board_members.base,
              },
              {
                label: t("organisation_chart"),
                value: FULL_ROUTES.organization_chart.base,
              },
              {
                label: t("reports"),
                value: FULL_ROUTES.reports.base,
              },
            ],
          },
          {
            label: t("our_business"),
            value: FULL_ROUTES.OUR_BUSINESS,
            isSubMenu: true,
            options: [
              {
                label: t("wealth_management"),
                value: FULL_ROUTES.wealth_management.base,
              },
              {
                label: t("asset_management"),
                value: FULL_ROUTES.asset_management.base,
              },
              {
                label: t("investment_banking"),
                value: FULL_ROUTES.investment_banking.base,
              },
              {
                label: t("our_funds"),
                value: FULL_ROUTES.our_funds.base,
              },
            ],
          },
          /* hide the section and move the sub menu one under about and other stand alone
          {
            label: t("our_insights"),
            isSubMenu: true,
            options: [
              {
                label: t("reports"),
                value: FULL_ROUTES.reports.base,
              },
              {
                label: t("in_the_media"),
                value: FULL_ROUTES.in_the_media.base,
              },
            ],
          },*/
          {
            label: t("in_the_media"),
            value: FULL_ROUTES.IN_THE_MEDIA,
          },
          {
            label: t("72Invest"),
            value: FULL_ROUTES._72Invest.base,
          },
          {
            label: t("contact_us"),
            isSubMenu: true,
            options: [
              {
                label: t("jobs"),
                value: FULL_ROUTES.jobs.base,
              },  
              {
                label: t("faq"),
                value: FULL_ROUTES.FAQ,
              },
              /* delete the term and condition from main menu
              {
                label: t("terms_and_conditions"),
                value: FULL_ROUTES.TERMS_AND_CONDITIONS,
              },*/
            ],
          },
        ]}
      />
    </div>
  );
}
