import { mergePaths } from "@tx/util-helpers";

enum API_BASE_ROUTES {
  ACCOUNT = "account",
  OPPORTUNITIES = "opportunities",
  WALLETS = "WALLETS"
}

export const API_ROUTES = {
  [API_BASE_ROUTES.ACCOUNT]: {
    path: mergePaths([API_BASE_ROUTES.ACCOUNT]),
    subRoutes: {
      profile: {
        path: mergePaths([API_BASE_ROUTES.ACCOUNT, "profile"]),
      },
    },
  },
  [API_BASE_ROUTES.OPPORTUNITIES]: {
    path: mergePaths(["admin", API_BASE_ROUTES.OPPORTUNITIES]),
  },
  [API_BASE_ROUTES.WALLETS]: {
    path: mergePaths(["admin", API_BASE_ROUTES.WALLETS]),
  },
};
