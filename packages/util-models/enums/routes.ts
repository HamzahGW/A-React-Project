const profile = "profile";

const mergePaths = (paths: string[]) => {
  return "/" + paths.join("/");
};

export enum ERoutesCommon {
  INVESTORS = "investors",
  INVESTOR = "investor",
  LOGIN = "login",
  OPPORTUNITIES = "opportunities",
  CONTENT = "content",
  NEW_MANAGERS = "new_managers",
  CURRENT_MANAGERS = "current_managers",
  MANAGERS = "managers",
  TRANSACTIONS = "transactions",
  FINANCE = "finance",
  ALL_TRANSACTIONS = "all_transactions",
  WITHDRAWAL_REQUESTS = "withdrawal_requests",
  DISTRIBUTE_DIVIDENDS_RECORDS = "distribute_dividends_records",
  DISTRIBUTE_DIVIDENDS_NEW_REQUESTS = "distribute_dividends_new_requests",
  ADMIN_ACCESS = "admin_access",
  UPGRADE_REQUESTS = "upgrade_requests",
  QUERY = "query",
  TRANSACTIONS_REPORTS = "transactions_reports",
  OPPORTUNITIES_REPORTS = "opportunities_reports",
}

export const FULL_ROUTES = {
  LANDING: {
    base: "/#landing",
    brief: "/#brief",
    our_story: "/#our_story",
    stats: "/#stats",
    footer: "/#footer",
  },
  OUR_STORY: "/our_story",
  who_are_we: "who_are_we",
  INVESTMENT_PHILOSOPHY: "/investment_philosophy",
  OUR_HISTORY: "/our_history",
  OUR_BUSINESS: "/our_business",
  TERMS_AND_CONDITIONS: "/terms_and_conditions",
  COOKIES_POLICY: "/cookies_policy",
  PRIVACY_POLICY: "/privacy_policy",
  IN_THE_MEDIA: "/#/news",
  FAQ: "/faq",
  OUR_FOUNDERS: {
    base: "/our_founders",
    director: "/our_founders/:id",
  },
  _72Invest: {
    base: "https://72-invest.com/",
  },
  reports: {
    base: "/reports",
  },
  news: {
    base:'/news',
  },
  jobs: {
    base: "/jobs",
  },
  organization_chart: {
    base: "/organization_chart",
  },
  board_members: {
    base: "/board_members",
  },
  asset_management: {
    base: "/asset_management",
  },
  investment_banking: {
    base: "/investment_banking",
  },
  our_funds: {
    base: "/our_funds",
  },
  wealth_management: {
    base: "/wealth_management",
  },
  QUERY: mergePaths([ERoutesCommon.INVESTORS, ERoutesCommon.QUERY]),
  UPGRADE_REQUESTS: mergePaths([
    ERoutesCommon.INVESTORS,
    ERoutesCommon.UPGRADE_REQUESTS,
  ]),
  CURRENT_MANAGERS: mergePaths([
    ERoutesCommon.MANAGERS,
    ERoutesCommon.CURRENT_MANAGERS,
  ]),
  NEW_MANAGERS: mergePaths([
    ERoutesCommon.MANAGERS,
    ERoutesCommon.NEW_MANAGERS,
  ]),
  ALL_TRANSACTIONS: mergePaths([
    ERoutesCommon.FINANCE,
    ERoutesCommon.ALL_TRANSACTIONS,
  ]),
  WITHDRAWAL_REQUESTS: mergePaths([
    ERoutesCommon.FINANCE,
    "withdrawal_requests",
  ]),
  DISTRIBUTE_DIVIDENDS_RECORDS: mergePaths([
    ERoutesCommon.FINANCE,
    "distribute_dividends_records",
  ]),
  DISTRIBUTE_DIVIDENDS_NEW_REQUESTS: mergePaths([
    ERoutesCommon.FINANCE,
    "distribute_dividends_new_requests",
  ]),
};
