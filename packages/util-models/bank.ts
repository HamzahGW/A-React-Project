export type TBankAccount = {
  // id: string
  // bic: EBankBIC;
  bic: string;
  bankName: string;
  bankAddress?: string;
  accountName?: string;
  accountNumber?: string;
  iban: string;
};

export type TBankCard = {
  id: string;
  maskedPAN: string;
  expiryDate: string;
  cardHolderName: string;
  cardBrand: TBankCardBrand;
};

export type TBankCardBrand = "MADA" | "MASTER" | "VISA";
