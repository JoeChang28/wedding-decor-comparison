import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repoBasePath = "/wedding-decor-comparison";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: isGithubActions ? repoBasePath : "",
  assetPrefix: isGithubActions ? repoBasePath : "",
};

export default nextConfig;
