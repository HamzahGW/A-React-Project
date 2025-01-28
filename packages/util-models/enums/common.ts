export enum ESocials {
  TWITTER = "TWITTER",
  FACEBOOK = "FACEBOOK",
  TIKTOK = "TIKTOK",
  INSTAGRAM = "INSTAGRAM",
  LINKED_IN = "LINKED_IN",
  YOUTUBE = "YOUTUBE",
}

export type TSocial = {
  name: ESocials;
  url?: string;
};

export enum ELevel {
  HIGH = "HIGH",
  MODERATE = "MODERATE",
  LOW = "LOW",
}

export enum EGender {
  MALE = "MALE",
  FEMALE = "FEMALE",
}

export enum EmaritalStatus {
  SINGLE = "SINGLE",
  MARRIED = "MARRIED",
}

export enum EGeneralStatus {
  ACTIVE = "ACTIVE",
  NOT_ACTIVE = "NOT_ACTIVE",
  DONE = "DONE",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED",
  CANCELED = "CANCELED",
}

export enum EChangeRoleRequestStatus {
  PENDING_APPROVAL = 'PENDING_APPROVAL',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED'
}
