import { useWordPressContent } from "@tx/data-access";
import { IWordPressRes } from "@tx/data-access/services/contents";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  TitleContainer,
} from "@tx/ui-components";
import { useLocale } from "@tx/util-hooks";
import { Download, File } from "lucide-react";
import { useEffect, useState } from "react";

export default function Reports() {
  const { data: reports } = useWordPressContent("/get_reports");
  const { data: years, isLoading } = useWordPressContent("/report_year");
  const { t, i18n } = useLocale();
  const [selectedYear, setSelectedYear] = useState(t("year") ?? "");
  const [ReportsList, setReportsList] = useState<any[] | undefined>([]);
  const [FinancialList, setFinancialList] = useState<any[] | undefined>([]);
  const [filteredFinancialList, setFilteredFinancialList] = useState<
    IWordPressRes[] | undefined
  >([]);
  const [filteredReports, setFilteredReports] = useState<
    IWordPressRes[] | undefined
  >([]);

  useEffect(() => {
    setReportsList(reports?.filter((item) => item.acf.type == "Report"));
    setFinancialList(
      reports?.filter((item) => item.acf.type == "Financial statement"),
    );
  }, [reports]);

  useEffect(() => {
    years?.forEach((item, index) => {
      if (index == 0) {
        setSelectedYear(item.name);
      }
    });
  }, [years]);

  useEffect(() => {
    let getSelectedYear: IWordPressRes[] | undefined = years?.filter(
      (item) => item.name == selectedYear,
    );
    // alert(JSON.stringify(getSelectedYear));

    if (getSelectedYear && getSelectedYear[0]) {
      setFilteredReports(
        ReportsList?.filter((report) =>
          report.report_year.includes(
            years?.filter((item) => item.name == selectedYear)[0].id ?? 0,
          ),
        ),
      );
      setFilteredFinancialList(
        FinancialList?.filter((report) =>
          report.report_year.includes(
            years?.filter((item) => item.name == selectedYear)[0].id ?? 0,
          ),
        ),
      );
    }
  }, [selectedYear, ReportsList, years]);

  return (
    <>
      <TitleContainer title={t("reports")} />
      <div className="sm:py-15 mx-auto flex max-w-7xl flex-col gap-5 px-8 py-14 leading-6 sm:px-6 md:flex-row lg:px-8">
        <div className="bg-muted flex w-full flex-col items-center justify-center gap-2 rounded-md p-5 md:w-32 md:items-start md:items-center md:justify-start">
          <p>{t("select_year")}</p>

          <div className="flex gap-2 md:flex-col">
            {years?.map((year) => (
              <button
                className={`${year.name == selectedYear ? "text-arch-orange" : ""}`}
                key={year.id}
                onClick={() => setSelectedYear(year.name)}
              >
                {year.name}
              </button>
            ))}
          </div>
        </div>
        <div className="w-full">
          <div className="grid w-full  gap-5 md:grid-cols-2">
            <p className="item-center flex hidden justify-center md:block">
              {t("reports")}
            </p>
            <p className="item-center flex hidden justify-center md:block">
              {t("financial_statements")}
            </p>
            <div className="flex flex-col gap-5">
              {filteredReports?.map((item, index) => (
                <>
                  <a
                    key={index}
                    href={
                      i18n.language === "ar" ? item.acf.file_ar : item.acf.file
                    }
                  >
                    <div className="flex flex-row justify-between gap-5 border p-4 shadow-sm">
                      <div className="flex flex-grow flex-row gap-2 ">
                        <div className="min-w-10 flex aspect-square h-10 items-center justify-center rounded-md bg-gray-100">
                          <File />
                        </div>
                        <p className="flex items-center">
                          {i18n.language === "ar"
                            ? item.acf.name_ar
                            : item.acf.name}
                        </p>
                      </div>

                      <div className="min-w-10 flex aspect-square h-10 items-center justify-center rounded-md bg-gray-100">
                        <Download />
                      </div>
                    </div>
                  </a>
                </>
              ))}
            </div>

            <div className="flex flex-col gap-5">
              {filteredFinancialList?.map((item, index) => (
                <a
                  key={index}
                  href={
                    i18n.language === "ar" ? item.acf.file_ar : item.acf.file
                  }
                >
                  <div className="flex flex-row justify-between gap-5 border p-4 shadow-sm">
                    <div className="flex flex-grow flex-row gap-2 ">
                      <div className="min-w-10 flex aspect-square h-10 items-center justify-center rounded-md bg-gray-100">
                        <File />
                      </div>
                      <p className="flex items-center">
                        {i18n.language === "ar"
                          ? item.acf.name_ar
                          : item.acf.name}
                      </p>
                    </div>

                    <div className="min-w-10 flex aspect-square h-10 items-center justify-center rounded-md bg-gray-100">
                      <Download />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
