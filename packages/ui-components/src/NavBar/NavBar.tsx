import { useBoolean, useLocalStorage, useLocale } from "@tx/util-hooks";
import { Dot, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useMemo } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../Accordion";
import { Link } from "react-router-dom";

interface HeaderProps {
  links: {
    label: string;
    value?: string;
    isSubMenu?: boolean;
    externalLink?: boolean;
    options?: { label: string; value: string }[];
  }[];
}

export function NavBar(props: HeaderProps) {
  const navOpen = useBoolean(false);
  const { i18n } = useLocale();
  const [lang, setLang] = useLocalStorage({
    initialValue: "ar",
    itemName: "language",
  });
  const convertNumber = useMemo(() => {
    return (num: number): string => {
      if (num < 10) {
        return `0${num}`;
      } else {
        return `${num}`;
      }
    };
  }, []);
  return (
    <>
      <div
        onClick={navOpen.setTrue}
        dir={i18n.language == "en" ? "ltr" : "rtl"}
        style={{
          pointerEvents: navOpen.value ? "none" : "all",
          ...(i18n.language == "ar" ? { right: 24 } : { left: 24 }),
        }}
        className=" fixed top-10 flex h-10 w-10 items-center justify-center rounded-md bg-white shadow-md md:h-14 md:w-14 md:cursor-pointer rtl:right-10"
      >
        <Menu />
      </div>
      <motion.div
        onClick={navOpen.setFalse}
        animate={{
          backdropFilter: navOpen.value ? "blur(4px)" : "blur(0px)",
          pointerEvents: navOpen.value ? "all" : "none",
        }}
        transition={{ duration: 0.5 }}
        className="fixed left-0 top-0 z-10 h-full w-full"
      ></motion.div>
      <motion.div
        initial={{
          ...(i18n.language === "ar" ? { right: "-100%" } : { left: "-100%" }),
        }}
        animate={{
          ...(i18n.language === "ar"
            ? { right: navOpen.value ? "0%" : "-100%" }
            : { left: navOpen.value ? "0%" : "-100%" }),
        }}
        style={{
          maxWidth: 350,
          // width: "90%",
          overflowY: "auto",
          height: "100%",
          ...(i18n.language === "ar" ? { right: 0 } : { left: 0 }),
        }}
        className="fixed top-0 z-10 flex h-full flex-col gap-5 bg-white p-10 shadow-xl"
        transition={{ ease: "easeOut", duration: 0.5 }}
      >
        <div
          dir={i18n.language == "en" ? "ltr" : "rtl"}
          onClick={navOpen.setFalse}
          className="inline-block flex max-h-14 min-h-14 w-14 items-center justify-center rounded-md bg-gray-100 py-5 md:cursor-pointer rtl:right-10"
        >
          <X />
        </div>

        {props.links.map((item, index) =>
          !item.isSubMenu ? (
            <a
              dir={i18n.language == "en" ? "ltr" : "rtl"}
              key={index}
              href={item.value}
              onClick={navOpen.setFalse}
            >
              <div className="flex flex-row gap-2">
                {/* <p className="text-md">{convertNumber(index + 1)}</p> */}
                <p className="text-xl md:text-2xl">{item.label}</p>
              </div>
            </a>
          ) : (
            <div dir={i18n.language == "en" ? "ltr" : "rtl"}>
              <Accordion
                key={index}
                type="single"
                collapsible
                className="w-auto"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <div className="flex flex-row gap-2">
                      {/* <p className="text-md">{convertNumber(index + 1)}</p> */}
                      <p className="me-14 text-xl md:text-2xl">
                        {item.externalLink && (
                          <a href={item.value}>{item.label}</a>
                        )}
                        {!item.externalLink && (
                          <>
                            {item.value && (
                              <Link
                                onClick={() => {
                                  if (item.value) {
                                    navOpen.setFalse();
                                  }
                                }}
                                to={item.value ?? ""}
                              >
                                {item.label}
                              </Link>
                            )}
                            {!item.value && <>{item.label}</>}
                          </>
                        )}
                      </p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    {item.options?.map((item, index2) => (
                      <Link
                        onClick={navOpen.setFalse}
                        key={`sub${index}-${index2}`}
                        to={item.value}
                      >
                        <div
                          dir={i18n.language == "en" ? "ltr" : "rtl"}
                          className="flex flex-row gap-2"
                        >
                          <Dot />
                          <p className="flex items-center md:text-xl">
                            {item.label}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          ),
        )}
        {i18n.language == "en" && (
          <div
            dir={i18n.language == "en" ? "ltr" : "rtl"}
            onClick={() => {
              setLang("ar");

              location.reload();
            }}
            className="text-xl md:cursor-pointer md:text-3xl"
          >
            عربي
          </div>
        )}
        {i18n.language == "ar" && (
          <div
            className="text-xl md:cursor-pointer md:text-2xl"
            onClick={() => {
              setLang("en");
              location.reload();
            }}
          >
            English
          </div>
        )}
      </motion.div>
    </>
  );
}

