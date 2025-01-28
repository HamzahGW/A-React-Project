import { useWordPressContent } from "@tx/data-access";
import { TitleContainer } from "@tx/ui-components";
import BackgroundWithTitle from "@tx/ui-components/src/BackgroundWithTitle/BackgroundWithTitle";
import { useLocale } from "@tx/util-hooks";
import { Link } from "react-router-dom";

export default function Business() {
  const { data } = useWordPressContent("/cards");
  const { t, i18n } = useLocale();
  return (
    <>
      <TitleContainer title={t("our_business")} />
      <div className="sm:py-15 mx-auto flex max-w-7xl justify-center px-8 py-14 leading-6 sm:px-6 lg:px-8">
        <div className="flex flex-row flex-wrap items-center justify-center gap-5">
          {data?.map((item, index) => (
            <Link key={index} to={item.acf.link}>
              <div className="flex flex-col items-center justify-center gap-5">
                <p className="text-xl">
                  {i18n.language == "ar" ? item.acf.name_ar : item.acf.name}
                </p>
                <div className="h-80 w-64 overflow-hidden rounded-md bg-gray-100">
                  <img
                    src={item.acf.image}
                    className="h-full w-full object-cover grayscale duration-300	 hover:scale-110 hover:grayscale-0 md:cursor-pointer"
                    alt="image"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
