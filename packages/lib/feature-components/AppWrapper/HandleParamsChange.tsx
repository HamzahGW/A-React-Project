import { EPaymentResult, EPaymentTypes } from "@tx/data-access";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

const generalErrMessage = "حدث خطأ في بوابة الدفع";

const messages = {
  [EPaymentTypes.SAVE_CARD]: {
    [EPaymentResult.SUCCESS]: "تم حفظ البطاقة",
    [EPaymentResult.FAILED]: generalErrMessage,
  },
  [EPaymentTypes.TOPUP_WALLET]: {
    [EPaymentResult.SUCCESS]: "تم شحن المحفظة",
    [EPaymentResult.FAILED]: generalErrMessage,
  },
  [EPaymentTypes.DELETE_CARD]: {
    [EPaymentResult.SUCCESS]: "تم حذف البطاقة",
    [EPaymentResult.FAILED]: generalErrMessage,
  },
  [EPaymentTypes.BUY_PERK]: {
    [EPaymentResult.SUCCESS]: "",
    [EPaymentResult.FAILED]: generalErrMessage,
  },
};

export default function HandleParamsChange() {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const type = searchParams.get("type");
    const result = searchParams.get("result");
    if (type && result) {
      try {
        if (result === EPaymentResult.SUCCESS) {
          if (!messages[type as EPaymentTypes][EPaymentResult.SUCCESS]) return;
          toast.success(
            messages[type as EPaymentTypes][EPaymentResult.SUCCESS],
            {
              toastId: type,
            },
          );
        }
        if (result === EPaymentResult.FAILED)
          toast.error(messages[type as EPaymentTypes][EPaymentResult.FAILED], {
            toastId: type,
          });
      } catch {}
    }
  }, [searchParams]);

  return <></>;
}
