import { useWordPressContent } from "@tx/data-access";
import { Button, Modal, TitleContainer } from "@tx/ui-components";
import { useBoolean, useLocale } from "@tx/util-hooks";
import { Link, X } from "lucide-react";

export default function OurFunds() {
  const { t } = useLocale();
  const { data } = useWordPressContent("/our_funds");

  return (
    <>
      <TitleContainer title={t("our_funds")} />
      <div className="sm:py-15 mx-auto max-w-7xl px-8 py-14 leading-6 sm:px-6 lg:px-8">
        <div className="flex flex-row flex-wrap justify-center gap-5">
          {data?.map((item, index) => (
            <Card key={index} img={item.acf.image} />
          ))}
        </div>
      </div>
    </>
  );
}

function Card(props: { img: string }) {
  const modalOpen = useBoolean(false);
  const { t } = useLocale();
  return (
    <>
      <div
        onClick={modalOpen.setTrue}
        className="md:min-w-64 aspect-square w-full rounded-md bg-gray-100 p-2 duration-300 md:w-64 md:cursor-pointer md:hover:scale-110"
      >
        <div className="relative">
          <img src={props.img} className="h-full w-full object-contain" />
        </div>
      </div>
      <Modal isOpen={modalOpen.value} onClose={modalOpen.setFalse}>
        <div className="flex flex-col gap-5">
          <div className="w-full">
            <button
              onClick={modalOpen.setFalse}
              className="duration flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md hover:bg-gray-100"
            >
              <X />
            </button>
          </div>
          <img
            src={props.img}
            className="h-full w-full border object-contain"
          />
        </div>
      </Modal>
    </>
  );
}
