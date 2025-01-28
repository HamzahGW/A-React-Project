import {
  EQContent,
  EtxProduct,
  IContent,
  TCountry,
} from "@tx/util-models";
import {
  UseQueryOptions,
  UseQueryResult,
  useQuery,
} from "@tanstack/react-query";
import { getContents } from "../services/contents";

export enum EContentType {
  groups = "group",
  keys = "keys",
}

type TFetchedContents =
  | EQContent.PAYMENT_METHODS_FD
  | EQContent.PAYMENT_METHODS_EC;

enum ENewMappedContent {
  PAYMENT_METHODS = "paymentMethods",
}

const mapFetchedContentKeys: Record<TFetchedContents, ENewMappedContent> = {
  [EQContent.PAYMENT_METHODS_EC]: ENewMappedContent.PAYMENT_METHODS,
  [EQContent.PAYMENT_METHODS_FD]: ENewMappedContent.PAYMENT_METHODS,
};

const mapContent = <T>(data: IContent[]): T => {
  const options: any = {};
  for (let i = 0; i < data.length; i++) {
    if (
      data[i].key === EQContent.PAYMENT_METHODS_EC ||
      data[i].key === EQContent.PAYMENT_METHODS_FD
    ) {
      options[mapFetchedContentKeys[data[i].key as TFetchedContents]] =
        data[i].value;
    } else {
      options[data[i].key] = data[i].value;
    }
  }
  return options;
};

type TOptions = {
  label: string;
  value: string;
};
export interface IFundManagerContent {
  annualIncome: TOptions[];
  numOfEmployees: TOptions[];
  numberOfExpectedFunds: TOptions[];
  sizeOfExpectedFunds: TOptions[];
  avgFundsIncome: TOptions[];
  typesOfFunds: TOptions[];
  expectedFundsDuration: TOptions[];
}

export interface IKycContent {
  employmentStatus: TOptions[];
  education: TOptions[];
  bankName: TOptions[];
  maritalStatus: TOptions[];
  riskLevel: TOptions[];
  investmentGoal: TOptions[];
  investmentExperience: TOptions[];
  investmentType: TOptions[];
  annualIncome: TOptions[];
  netWorthEstimated: TOptions[];
  incomeMainSource: TOptions[];
  employmentSector: TOptions[];
  investmentDuration: TOptions[];
}

export type TOtherContent = {
  [EQContent.PAYMENT_METHODS_FD]: {
    [ENewMappedContent.PAYMENT_METHODS]: TOptions[];
  };
  [EQContent.PAYMENT_METHODS_EC]: {
    [ENewMappedContent.PAYMENT_METHODS]: TOptions[];
  };
  [EQContent.ATTACHMENTS_AH]: {
    atheerGuidline: TOptions;
  };
  [EQContent.ATHEER_GENERAL_LINKS]: {
    atheerApplicationLink: TOptions;
  };
  attachments_fd: {
    fundRaisingGuideline: TOptions;
  };
};
interface IEntrepreneurForm {
  projectStage: TOptions[];
}

// define types for the content fetched
export interface ICountriesContent {
  countries: TCountry[];
}

type TCity = `${string}_cities`;

export interface ICitiesContent {
  [key: TCity]: TCountry[];
}

export type TLaunchPopUp = {
  id: string;
  title: string;
  image: string;
  description: string;
  actionBtnURL: string;
  actionBtnText: string;
  actionBtnDeepLinkURL: string;
  isActive: boolean;
  type: EtxProduct;
};

type ILaunchPopUp = {
  launchPopup: TLaunchPopUp[];
};

type ExtractContent<A, RContent, GContentModel> = A extends RContent
  ? GContentModel
  : never;

type TContentType<T> =
  | ExtractContent<T, EQContent.KYC, IKycContent>
  | ExtractContent<T, EQContent.ATTACHMENTS_FD, TOtherContent["attachments_fd"]>
  | ExtractContent<
    T,
    EQContent.DIVIDENDS,
    {
      distributeYear: TOptions[];
      dividendsRate: TOptions[];
    }
  >
  | ExtractContent<
    T,
    EQContent.ATHEER_GENERAL_LINKS,
    TOtherContent["atheerGeneralLinks"]
  >
  | ExtractContent<
    T,
    EQContent.ATTACHMENTS_AH,
    TOtherContent["atheerGeneralAttachments"]
  >
  | ExtractContent<T, EQContent.ENTREPRENEUR_FORM, IEntrepreneurForm>
  | ExtractContent<T, EQContent.COUNTRIES, ICountriesContent>
  | ExtractContent<
    T,
    EQContent.BANK_NAME,
    {
      bankName: TOptions[];
    }
  >
  | ExtractContent<T, TCity, ICitiesContent>
  | ExtractContent<T, EQContent.FUND_MANAGER, IFundManagerContent>
  | ExtractContent<T, EQContent.LAUNCH_POPUP, ILaunchPopUp>
  | ExtractContent<
    T,
    EQContent.PAYMENT_METHODS_FD,
    TOtherContent["paymentMethods_fd"]
  >
  | ExtractContent<
    T,
    EQContent.PAYMENT_METHODS_EC,
    TOtherContent["paymentMethods_ec"]
  >
  | ExtractContent<
    T,
    EQContent.TRANSACTION_TYPE,
    {
      transactionType: TOptions[];
    }
  >;

export const useFetchContent = <T extends EQContent | TCity>(
  name: [name: T, ...keys: boolean[]],
  contentType: "groups" | "keys",
  options?: UseQueryOptions,
): UseQueryResult<TContentType<T>> => {
  return useQuery(
    name,
    () =>
      getContents({
        groups: contentType === "groups" ? JSON.stringify(name) : undefined,
        keys: contentType === "keys" ? JSON.stringify(name) : undefined,
      }),
    {
      ...(options as {}),
      staleTime: Infinity,
      cacheTime: Infinity,
      refetchOnWindowFocus: false,
      select: (data) => {
        return mapContent(data.data.contents);
      },
    },
  );
};
