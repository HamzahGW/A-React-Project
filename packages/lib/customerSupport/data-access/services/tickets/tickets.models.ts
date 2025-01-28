export interface ISubmitTicketReq {
  subject: string;
  description: string;
  contactName?: string;
  phone?: string;
  email?: string;
}

export interface ISubmitTicketRes {
  message: string;
}
