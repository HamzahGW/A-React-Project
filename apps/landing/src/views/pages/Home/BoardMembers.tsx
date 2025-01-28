import { useWordPressContent } from "@tx/data-access";
import { TitleContainer } from "@tx/ui-components";
import { useLocale } from "@tx/util-hooks";
import { FULL_ROUTES } from "@tx/util-models";
import { Link } from "react-router-dom";

export default function BoardMembers() {
  const { t, i18n } = useLocale();
  const { data } = useWordPressContent("/board_of_directors");
  return (
    <>
      <TitleContainer title={t("board_members")} />
      <div className="sm:py-15 max-w-8xl mx-auto px-8 py-14 leading-6 sm:px-6 lg:px-8">
        <div className="flex w-full flex-row flex-wrap justify-center gap-14">
          {data?.map((item, index) => (
            <Link to={`${FULL_ROUTES.OUR_FOUNDERS.base}/${item.id}`}>
              <div
                key={index}
                className="relative flex w-52 flex-col items-center gap-5 rounded-md p-5 hover:bg-gray-100"
              >
                <div className="aspect-square overflow-hidden rounded-md bg-gray-100">
                  <img
                    src={item.acf.image}
                    alt="avatar"
                    className="h-full w-full object-cover"
                  />
                </div>
                {i18n.language == "ar" && (
                  <p className="w-28 text-center">{item.acf.name_ar}</p>
                )}
                {i18n.language == "en" && (
                  <p className="w-28 text-center">{item.acf.name}</p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
