import { useQuery } from "@tanstack/react-query";
import {
  EUserType,
  getOpportunity,
  getSukukManager,
  getWalletByFilter,
} from "@tx/data-access";
import { LoadingSpinner, TextField } from "@tx/ui-components";
import { useEffect } from "react";
import { EQKeys, EtxProduct } from "@tx/util-models";
import { useForm } from "react-hook-form";

interface CommonInputsProps {
  opType: EtxProduct;
  opId: string | undefined;
  isOpToManager?: boolean;
}

export function CommonTransactionInputs({
  opType,
  opId,
  isOpToManager,
}: CommonInputsProps) {
  const { register, reset, setValue } = useForm({});
  const { data: opportunity } = useQuery(
    [EQKeys.OPPORTUNITY, opId],
    () => getOpportunity(opId as string),
    {
      enabled: !!opId,
      refetchOnMount: false,
    },
  );

  const managerId = opportunity?.managerId;

  const { data: manager } = useQuery(
    ["manager"],
    () => getSukukManager({ id: managerId as string }),
    {
      enabled: !!managerId,
      refetchOnMount: false,
    },
  );

  const { data: hWallet, isFetching: hWalletLoading } = useQuery(
    ["hWallet", managerId],
    () =>
      getWalletByFilter(managerId as string, {
        ownerType: EUserType.OPPORTUNITY_MANAGER,
      }),
    {
      enabled: !!managerId,
      refetchOnMount: false,
    },
  );

  const { data: fWallet, isFetching: fWalletLoading } = useQuery(
    ["fWallet", opId],
    () =>
      getWalletByFilter(opId as string, {
        ownerType: EUserType.OPPORTUNITY,
        type: opType,
      }),
    {
      enabled: !!opId,
      refetchOnMount: false,
    },
  );

  useEffect(() => {
    if (hWallet && fWallet && manager && opportunity) {
      reset({
        fromAccountName: isOpToManager
          ? fWallet.bankAccount?.accountName
          : hWallet.bankAccount?.accountName,
        toAccountName: isOpToManager
          ? hWallet.bankAccount?.accountName
          : fWallet.bankAccount?.accountName,
        fromIban: isOpToManager
          ? fWallet.bankAccount?.iban
          : hWallet.bankAccount?.iban,
        toIban: isOpToManager
          ? hWallet?.bankAccount?.iban
          : fWallet.bankAccount?.iban,
        // managerName: `${manager.firstName} ${manager.lastName}`,
        name: opportunity.name,
        // crNumber: manager.managerAdditionalData.crNumber,
        totalAmount: isOpToManager
          ? fWallet.availableBalance
          : hWallet.availableBalance,
      });
      //   if (opType === EOpportunityType.FUND_DISTRIBUTION) {
      //     setValue('managerName', `${manager.firstName} ${manager.lastName}`);
      //   }
      //   if (opType === EOpportunityType.EQUITY) {
      //     setValue('managerName', manager?.managerAdditionalData?.crAdditionalData?.crName);
      //   }
    }
  }, [hWallet, fWallet, manager, opportunity, isOpToManager]);

  return (
    <>
      {(fWalletLoading || hWalletLoading) && <LoadingSpinner />}

      <div className="grid gap-4 lg:grid-cols-2">
        <TextField
          label="اسم المدير"
          name="managerName"
          register={register}
          disabled
        />
        <TextField
          label="السجل التجاري للشركة"
          name="crNumber"
          register={register}
          disabled
        />

        <TextField
          label="من حساب"
          name="fromAccountName"
          register={register}
          disabled
        />
        <TextField
          register={register}
          label="إلى حساب"
          name="toAccountName"
          disabled
        />
        <TextField
          register={register}
          label="من IBAN"
          name="fromIban"
          helper="iban"
          disabled
        />
        <TextField
          register={register}
          label="إلى IBAN"
          name="toIban"
          helper="iban"
          disabled
        />
      </div>
    </>
  );
}
