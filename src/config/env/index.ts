import { isProductionEnv, normalizeSiteUrl, parseAppEnv } from "./env-helper";

export const APP_ENV = parseAppEnv(process.env.APP_ENV);
export const SITE_URL = normalizeSiteUrl(process.env.SITE_URL);
export const IS_PRODUCTION = isProductionEnv({
  appEnv: APP_ENV,
  nodeEnv: process.env.NODE_ENV,
});

export * from "./env-helper";
