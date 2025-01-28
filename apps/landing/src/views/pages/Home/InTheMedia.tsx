import { useWordPressContent } from "@tx/data-access";
import { TitleContainer } from "@tx/ui-components";
import { useLocale } from "@tx/util-hooks";
import { Link } from "lucide-react";

export default function InTheMedia() {
  const { data } = useWordPressContent("/in_the_media");
  const { t, i18n } = useLocale();
  return (
    <>
      <TitleContainer title={t("in_the_media")} />
      <div className="sm:py-15 mx-auto max-w-7xl px-8 py-14 leading-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {data?.map((item, index) => (
            <a href={item.acf.link}>
              <div className="flex flex-col gap-5 bg-gray-100 p-5 shadow-md">
                <div className="relative">
                  <img src={item.acf.image} alt="media image" />
                  <div className="absolute right-2 top-2 flex h-10 w-10 items-center justify-center rounded-md bg-black/50 text-white">
                    <Link />
                  </div>
                </div>
                {i18n.language == "ar" && <p>{item.acf.name_ar}</p>}
                {i18n.language == "en" && <p>{item.acf.name}</p>}
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
