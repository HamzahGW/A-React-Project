import { useEffect, useRef } from "react";
import classes from "./Brief.module.css";
import { ChevronDown } from "lucide-react";
import { FULL_ROUTES } from "@tx/util-models";
import { useLocale } from "@tx/util-hooks";
import { Link } from "react-router-dom";

interface BriefProps {
  activeSlide: number;
}

export default function Brief(props: BriefProps) {
  const textRef = useRef<HTMLElement>(null);
  const { i18n } = useLocale();
  useEffect(() => {
    if (textRef.current) {
      if (props.activeSlide == 1) {
        textRef.current.style.setProperty("--w", "100%");
      } else {
        textRef.current.style.setProperty("--w", "0%");
      }
    }
  }, [props.activeSlide]);
  return (
    <>
      <div className="flex h-full w-full items-center justify-center bg-white p-10 md:p-40">
        {i18n.language == "ar" && (
          <p
            style={{
              lineHeight: 1.5,
            }}
            className="text-center text-2xl md:text-4xl"
          >
            نحن شركة مستقلة تعنى
            <span ref={textRef} className={classes.spn1}>
              بإدارة الأصول والثروات العائلية
            </span>{" "}
            أولويتنا تحقيق كل ما يصب في مصلحتك
          </p>
        )}

        {i18n.language == "en" && (
          <p
            style={{
              lineHeight: 1.5,
            }}
            className="text-center text-2xl md:text-4xl"
          >
            We are an independent company concerned with managing{" "}
            <span ref={textRef} className={classes.spn1}>
              family assets and wealth
            </span>
            , our priority is to achieve everything that is in your interest
          </p>
        )}
        <Link to={FULL_ROUTES.LANDING.stats}>
          <ChevronDown
            size={80}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          />
        </Link>
      </div>
    </>
  );
}
