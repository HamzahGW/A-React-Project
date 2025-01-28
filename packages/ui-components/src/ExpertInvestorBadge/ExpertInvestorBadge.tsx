import { TbDiamond } from "react-icons/tb";
import Button from "../Button/Button";

interface IProps {
  className?: string;
  onClick?: () => void;
  isExpert?: boolean;
}

export function ExpertInvestorBadge({ className, onClick, isExpert }: IProps) {
  return (
    <Button onClick={isExpert ? undefined : onClick} className={className}>
      <div className="flex gap-3 px-2">
        <div>{isExpert ? "عميل مؤهل" : "الترقية لحساب عميل مؤهل"}</div>
        <div>
          <TbDiamond size="1.5rem" />
        </div>
      </div>
    </Button>
  );
}

export default ExpertInvestorBadge;
