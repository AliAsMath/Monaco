/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  env: {
    NEXTAUTH_URL: "http://localhost:3000",
    GITHUB_CLIENT_ID: "Iv1.dd320fdb02e118a2",
    GITHUB_CLIENT_SECRET: "92bb0df560030041edd2e12a36c36b1fc35f07a0",
    JWT_SECRET: "AliAs777",
    DB_USERNAME: "farshid",
    DB_PASS: "1pccl7NpPIAPEhvZ",
    GOOGLE_CLIENT_ID: "371056893995-voh2t5djkjmcqd6osdmhg5cvc9434b00",
    GOOGLE_CLIENT_SECRET: "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",
  },
};

module.exports = nextConfig;
