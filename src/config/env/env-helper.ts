/**
 * Safely parses and trims the APP_ENV environment variable, defaulting to "dev".
 */
export function parseAppEnv(value?: string | null): string {
  if (!value || typeof value !== "string") {
    return "dev";
  }
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : "dev";
}

/**
 * Normalizes a website URL by stripping whitespace and trailing slashes, defaulting to "http://localhost:3000".
 */
export function normalizeSiteUrl(url?: string | null): string {
  if (!url || typeof url !== "string") {
    return "http://localhost:3000";
  }
  const trimmed = url.trim();
  if (trimmed.length === 0) {
    return "http://localhost:3000";
  }
  return trimmed.replace(/\/+$/, "");
}

/**
 * Evaluates whether the active runtime environment is considered production.
 */
export function isProductionEnv(env: {
  appEnv?: string | null;
  nodeEnv?: string | null;
}): boolean {
  return env.appEnv === "production" || env.nodeEnv === "production";
}
