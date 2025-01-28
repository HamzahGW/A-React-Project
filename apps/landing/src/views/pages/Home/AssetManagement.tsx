import { useWordPressContent } from "@tx/data-access";
import { TitleContainer } from "@tx/ui-components";
import { useLocale } from "@tx/util-hooks";

export default function AssetManagement() {
  const { t, i18n } = useLocale();
  const { data, isLoading } = useWordPressContent("/asset_management");

  return (
    <>
      <TitleContainer title={t("asset_management")} />
      <div className="sm:py-15 mx-auto flex min-h-full max-w-7xl flex-col gap-5 p-2 px-8 py-14 leading-6 sm:px-6 md:flex-row lg:px-8">
        {!isLoading && (
          <div className="flex h-[384px] w-64 shrink-0 flex-grow	 items-center justify-center overflow-hidden rounded-md bg-gray-100 grayscale">
            <img src="https://thearchcapital.com//wp-content/uploads/2024/05/mountain-wallpaper-free-hd-hq-1fubvvg5wj1fmrqq.webp" />
          </div>
        )}
        {data?.map((item) => (
          <div key={item.id}>
            {i18n.language == "ar" && (
              <div
                className="md:border-r-arch-orange min-h-full p-4 text-start md:border-r-4"
                dangerouslySetInnerHTML={{ __html: item.acf.content_ar }}
                /*test make the text hard coded and its working dangerouslySetInnerHTML={{ __html: "<p>تقدم إدارة الأصول حلولًا متكاملة تلبي احتياجات العملاء المتنوعة، من خلال الإشراف على مجموعة واسعة من المنتجات الاستثمارية التي تتيح فرصًا استثمارية في الأسواق المحلية والدولية. تشمل هذه المنتجات الصناديق الخاصة، الصناديق ذات العوائد الثابتة، وصناديق الاستثمار العقاري.</p>"+
                "<ul><li><strong>صناديق الاستثمار العقاري</strong><strong>:</strong> توفر أرش المالية خدمات متخصصة في إدارة صناديق الاستثمار العقاري بأنواعها المختلفة، سواء كانت صناديق عامة أو خاصة، مثل صناديق البنية التحتية، صناديق تطوير البناء، وصناديق العقارات ذات العوائد المولدة للدخل.</li>"+
                "<li><strong>صناديق رأس المال الخاص</strong><strong>:</strong> تقدم أرش المالية خدمات لإدارة صناديق رأس المال الخاص التي تركز على الاستثمار في أسهم الشركات ضمن قطاعات متنوعة، بما يساهم في تحقيق عوائد مستدامة.</li>"+ 	
                "<li><strong>إدارة المحافظ الاستثمارية</strong><strong>:</strong> تعمل أرش المالية على تخصيص أصول المحافظ الاستثمارية وفقًا لأهداف العملاء، مع تقديم استشارات مستمرة تهدف إلى تعزيز النمو في العوائد، والحفاظ على رأس المال، وتحقيق الأهداف المالية المحددة للعملاء.</li> </ul>"+
                "<p style=\"text-align: center;\"><a href=\"/#/our_funds\">الانتقال لصناديق</a></p>" }} */
              />
            )}
            {i18n.language == "en" && (
              <div
                className="md:border-l-arch-orange min-h-full p-4 text-start md:border-l-4"
                dangerouslySetInnerHTML={{ __html: item.acf.content }}
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
}
