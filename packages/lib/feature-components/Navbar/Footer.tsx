import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebook,
  faLinkedin,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { FULL_ROUTES } from "@tx/util-models";
import { useLocale } from "@tx/util-hooks";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { GlowingCard } from "@tx/ui-components";
import { useWordPressContent } from "@tx/data-access";

const TwitterIcon = (props: JSX.IntrinsicElements["svg"]) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className="bi bi-twitter-x h-6 w-6 pl-2"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
  </svg>
);

export function Footer() {
  const { t, i18n } = useLocale();
  const { data } = useWordPressContent("/cards");

  const footerData = [
    {
      title: t("communication"),
      links: [
        {
          name: t("linked_in"),
          icon: <FontAwesomeIcon icon={faLinkedin} className="h-4 w-4 pl-2" />,
          href: "https://www.linkedin.com/company/archcapital/",
        },
        {
          name: t("facebook"),
          icon: <FontAwesomeIcon icon={faFacebook} className="h-4 w-4 pl-2" />,
          href: "https://www.facebook.com/people/Archcapital-SA/61554665807773/",
        },
        {
          name: t("x"),
          icon: <TwitterIcon />,
          href: "https://twitter.com/ArchcapitalSA",
        },
      ],
    },
    {
      title: t("disclosures"),
      links: [
        {
          name: t("disclosures_and_reports"),
          icon: "",
          href: FULL_ROUTES.reports.base,
        },
        {
          name: t("protection_and_awareness_of_the_investor"),
          icon: "",
          href: FULL_ROUTES.INVESTMENT_PHILOSOPHY,
        },
        {
          name: t("organizational_structure"),
          icon: "",
          href: FULL_ROUTES.organization_chart.base,
        },
      ],
    },
    {
      title: t("legal_policy"),
      links: [
        {
          name: t("terms_and_conditions"),
          icon: "",
          href: FULL_ROUTES.TERMS_AND_CONDITIONS,
        },
        {
          name: t("cookie_policy"),
          icon: "",
          href: FULL_ROUTES.COOKIES_POLICY,
        },
        {
          name: t("privacy_policy"),
          icon: "",
          href: FULL_ROUTES.PRIVACY_POLICY,
        },
      ],
    },
  ];

  const path = useLocation();

  const divRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  useLayoutEffect(() => {
    const observer = new ResizeObserver(() => {
      if (divRef.current) {
        setWidth(divRef.current.getBoundingClientRect().width);
      }
    });
    if (divRef.current) {
      observer.observe(divRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [divRef]);

  return (
    <div
      dir={i18n.language == "ar" ? "rtl" : "ltr"}
      style={{
        height:
          location.hash == "#/#footer" ||
          location.hash == "#/#brief" ||
          location.hash == "#/#our_story" ||
          location.hash == "#/#stats" ||
          location.hash == "#/#landing"
            ? "100%"
            : "auto",
      }}
      className="relative flex w-full items-center justify-center overflow-hidden bg-black"
    >
      <footer className="relative flex flex-col items-center gap-20 bg-black p-4 pt-20 text-white md:p-5 ">
        <div>
          <div>
            {/* 1 */}
            <div
              style={{ width: location.hash == "/" ? "auto" : "auto" }}
              className="item-center mx-auto mt-0 flex w-full flex-col gap-6 md:max-w-6xl md:flex-row md:justify-center md:gap-x-14"
            ></div>
            {/* 2 */}
            <div className="my-10 flex w-full flex-col justify-center space-y-5 md:flex-row md:gap-x-14 md:space-y-0">
              <div className="">
                <span>
                  <p className="mb-4 text-4xl">{t("head_office")}</p>
                  {/* <br /> */}
                  {t("safa_street_al_nahda_district")}
                  <br /> {t("jeddah_23523_3165")}
                  <br />
                  {t("saudi_arabia_po_box_10014_jeddah_21433")}
                </span>
              </div>
              <div className="">
                <span>
                  <p className="mb-4 text-4xl">{t("branch_office")}</p>
                  {t("headquarters")}
                  <br />
                  {t("ash_shati_district")}
                  <br />
                  {t("saudi_arabia")}
                </span>
              </div>
            </div>
          </div>
          {/* 3 */}

          <div className="mt-8   text-center md:px-40">
            <span className="block border-t border-gray-700 pt-8 text-xs md:text-sm">
              {t("commercial_registration_and_license_details")}
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
