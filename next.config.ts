import type { NextConfig } from "next";
import { i18nConfig } from "./i18n-config";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: [...i18nConfig.locales],
    defaultLocale: i18nConfig.defaultLocale,
  },
};

export default nextConfig;
