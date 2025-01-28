import * as apis from "./tickets.apis";
import { ISubmitTicketReq, ISubmitTicketRes } from "./tickets.models";

export async function submitTickets(
  data: ISubmitTicketReq,
): Promise<ISubmitTicketRes> {
  const res = await apis.submitTicket(data);
  return res;
}
