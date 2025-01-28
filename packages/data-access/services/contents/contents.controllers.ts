import { HTTP } from "@tx/util-helpers";
import type {
  IGetContentsByGroup,
  IGetContentsByKeysGroupsReq,
  IWordPressRes,
} from "./contents.models";

const baseURL = "/contents";

export type EndPoints =
  | "/our_investment_philo"
  | "/who_are_we"
  | "/our_history"
  | "/board_of_directors"
  | `/board_of_directors?categories=41` //for founders
  | `/board_of_directors/${number}` //for a member
  | "/our_business"
  | "/faq"
  | "/get_reports"
  | "/our_business"
  | "/in_the_media"
  | "/form_link"
  | "/asset_management"
  | "/investment_banking"
  | "/our_funds"
  | "/wealth_management"
  | "/stats"
  | "/our_story"
  | "/cards"
  | `/report_year`; // Other wordpress routes go here.

export async function getContents(
  data: IGetContentsByKeysGroupsReq,
): Promise<IGetContentsByGroup> {
  const res = await HTTP.get<IGetContentsByGroup>(baseURL, data);
  return res.data;
}

export async function fetchWordPressContent(endpoint: EndPoints) {
  const res = await HTTP.get<IWordPressRes[]>(endpoint);
  return res.data;
}

export async function fetchWordPressPost(endpoint: EndPoints) {
  const res = await HTTP.get<IWordPressRes>(endpoint);
  return res.data;
}
