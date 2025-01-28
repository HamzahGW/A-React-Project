import { useWordPressContent } from "@tx/data-access";
import { TitleContainer } from "@tx/ui-components";

export default function WhoAreWe() {
  const { data } = useWordPressContent("/who_are_we");
  return (
    <>
      <TitleContainer title="من نحن" />
      <div className="sm:py-15 mx-auto max-w-7xl px-8 py-14 leading-6 sm:px-6 lg:px-8">
        {data?.map((item) => (
          <div key={item.id}>
            <div
              className="text-center"
              dangerouslySetInnerHTML={{ __html: item.acf.content_ar }}
            />
          </div>
        ))}
      </div>
    </>
  );
}
