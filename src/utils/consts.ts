export const CLIENT_PRICING_TIERS = Object.freeze({
  TIER_1: 1,
  TIER_2: 2,
  TIER_3: 3,
  TIER_4: 4,
  TIER_5: 5,
});

export const GLOBAL_CONFIG_NAMES = {
  TRADING_ENABLED: "trading_enabled",
};

export const LOCAL_STORAGE_KEYS = {
  BLACKLISTED_VENUES_GRID_STATE: "blacklistedVenuesGridState",
  WITHDRAW_ADDRESSES_GRID_STATE: "withdrawAddressesGridState",
  DEPOSIT_ADDRESSES_GRID_STATE: "depositAddressesGridState",
  CUSTOMER_PROFILE_GRID_STATE: "customerProfileGridState",
  LOGS_GRID_STATE: "logsGridState",
  MARKET_LADDER_CONFIGS_GRID_STATE: "marketLadderConfigsGridState",
  PRICE_LADDERS_GRID_STATE: "priceLaddersGridState",
  PRICE_LADDER_RUNGS_GRID_STATE: "priceLadderRungsGridState",
  PRICE_LADDER_TIERS_GRID_STATE: "priceLadderTiersGridState",
  SIZE_SKEW_GRID_STATE: "sizeSkewGridState",
  VENUES_GRID_STATE: "venuesGridState",
  DESKS_GRID_STATE: "desksGridState",
  MARKETS_GRID_STATE: "marketsGridState",
  BALANCES_GRID_STATE: "balancesGridState",
  CREDITS_GRID_STATE: "creditsGridState",
  CLIENT_MARKETS_GRID_STATE: "clientMarketsGridState",
  PRICING_GRID_STATE: "pricingGridState",
  USERS_GRID_STATE: "usersGridState",
  CURRENT_SELECTED_TOP_TAB: "currentSelectedTopTab",
  CURRENT_SELECTED_BOTTOM_TAB: "currentSelectedBottomTab",
  GOOGLE_TOKEN_TIMESTAMP: "googleTokenTimestamp",
  GOOGLE_PROFILE: "googleProfile",
  GOOGLE_TOKEN: "googleToken",
  TRANSFER_HISTORY_GRID_STATE: "transferHistoryGridState",
};


export const DELETECONFIRMINPUT = "DELETE";
export const CREDIT_PREFUNDED_OPTIONS = [ { value: 'CREDIT', label: 'CREDIT' }, { value: 'PREFUNDED', label: 'PREFUNDED' } ] as const;