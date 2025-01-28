import { TBankCard, TBankCardBrand } from "@tx/util-models";
import { FaCcMastercard, FaCcVisa } from "react-icons/fa";

type Props = {
  card: TBankCard;
};

const cardsBrandsIcons: Record<TBankCardBrand, any> = {
  MASTER: <FaCcMastercard />,
  MADA: "/images/madaWhite.png",
  VISA: <FaCcVisa />,
};

export function CreditCard({ card }: Props) {
  return (
    <div>
      <div className="bg-primary hover:bg-primary-800 flex h-20 items-center justify-between rounded-lg border-2 px-6 py-7 text-white transition-colors">
        <div>
          {card.cardBrand === "MADA" ? (
            <img className="w-14" src={cardsBrandsIcons["MADA"]} />
          ) : (
            <div className="text-4xl  text-white">
              {cardsBrandsIcons[card.cardBrand]}
            </div>
          )}
        </div>
        <div className="tracking-widest" dir="ltr">
          {card.maskedPAN}
        </div>
      </div>
    </div>
  );
}

export default CreditCard;
