enum EtxProduct {
  EQUITY = "EQUITY",
  LANDING = "LANDING",
  FUND_DISTRIBUTION = "FUND_DISTRIBUTION",
  SUKUK = "SUKUK",
  ATHEER = "ATHEER",
}

export const APP_CONFIG = {
  X_API: import.meta.env.VITE_X_API,
  FUND_LINK: import.meta.env.VITE_FUND_LINK,
  EQUITY_LINK: import.meta.env.VITE_EQUITY_LINK,
  ATHEER_LINK: import.meta.env.VITE_ATHEER_LINK,
  CURRENT_LINK: import.meta.env.VITE_CURRENT_LINK,
  BASE_URL: import.meta.env.VITE_BASE_URL_2,
  tx_BASE_URL: import.meta.env.VITE_tx_BASE_URL,
  tx_X_API: import.meta.env.VITE_tx_X_API,
  MAX_INVEST_AMOUNT:
    import.meta.env.VITE_CHANNEL === EtxProduct.FUND_DISTRIBUTION
      ? 200000
      : 20000,
  // PLATFORM: import.meta.env.VITE_PLATFORM,
  PLATFORM: "WEB_APP",
  CHANNEL: import.meta.env.VITE_CHANNEL as EtxProduct,
};
