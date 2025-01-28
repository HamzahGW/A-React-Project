import { HTTP } from "@tx/util-helpers";
import { ISubmitTicketReq, ISubmitTicketRes } from "./tickets.models";

const baseUrl = "/tickets";

export async function submitTicket(
  data: ISubmitTicketReq,
): Promise<ISubmitTicketRes> {
  const res = await HTTP.post<ISubmitTicketRes>(baseUrl, data);
  return res.data;
}
