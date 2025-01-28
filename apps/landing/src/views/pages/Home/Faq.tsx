import { useWordPressContent } from "@tx/data-access";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  TitleContainer,
} from "@tx/ui-components";
import { useLocale } from "@tx/util-hooks";
import { Building, Clock, Mail, Phone } from "lucide-react";

export default function Faq() {
  const { data } = useWordPressContent("/faq");
  const { t, i18n } = useLocale();
  return (
    <>
      <TitleContainer title={t("faq")} />
      <div className="sm:py-15 mx-auto max-w-7xl px-8 py-14 leading-6 sm:px-6 lg:px-8">
        <Accordion
          type="single"
          collapsible
          className="mx-auto w-full max-w-4xl space-y-16 px-6 tracking-wider sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 sm:space-y-0 lg:mt-0 lg:grid-cols-1 lg:gap-x-10 lg:px-8"
        >
          {/* {data?.map((faq, index) => (
            <AccordionItem
              className="rounded-lg border-b-0 px-10  hover:bg-gray-100/50"
              key={index}
              value={`item-${index}`}
            >
              <AccordionTrigger>
                {i18n.language == "ar" ? faq.acf.question_ar : faq.acf.question}
              </AccordionTrigger>
              <AccordionContent>
                {" "}
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      i18n.language == "ar"
                        ? faq.acf.answer_ar
                        : faq.acf.answer,
                  }}
                />
              </AccordionContent>
            </AccordionItem>
          ))} */}
          <div className="text-4xl">{t("get_in_touch")}</div>
          <p>{t("grow_wealth_contact")}</p>
          <div className="flex flex-row items-center gap-2">
            <Mail />
            <a className=" md:text-xl" href="mailto:info@thearchcapital.com">
              info@thearchcapital.com
            </a>
          </div>
          <p>{t("for_complaints_contact")}</p>
          <div className="flex flex-row items-center gap-2">
            <Mail />
            <a
              className=" md:text-xl"
              href="mailto:complain@thearchcapital.com"
            >
              complain@thearchcapital.com
            </a>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Phone />
            <a className=" md:text-xl" href="tel:966920022922" dir="ltr">
              {t("tele")}
            </a>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Clock />
            <p className=" md:text-xl">{t("working_hours")}</p>
          </div>
        </Accordion>
      </div>
    </>
  );
}
