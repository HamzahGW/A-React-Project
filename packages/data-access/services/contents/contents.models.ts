import type { IContent } from "@tx/util-models";

export interface IGetContentsByKeysGroupsReq {
  groups?: string;
  keys?: string;
}

export interface IContentsGroup extends IContent {
  groups: string;
}

export interface IGetContentsByGroup {
  message: string;
  data: {
    contents: IContentsGroup[];
  };
}

export interface IGetContentsByKeys {
  message: string;
  data: {
    contents: IContent[];
  };
}

export interface IACFContent {
  content: string;
  content_ar: string;
  name: string;
  name_ar: string;
  question: string;
  question_ar: string;
  answer: string;
  answer_ar: string;
  image: string;
  file: string;
  file_ar: string;
  link: string;
  postion: string;
  postion_ar: string;
  year: string;
  value: string;
  content_for_landing_page: string;
  content_for_landing_page_ar: string;
  type: string;
  percentage: boolean;
}

export interface IWordPressRes {
  id: number;
  acf: IACFContent;
  name: string;
  report_year: number[];
}
