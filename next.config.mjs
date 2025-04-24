const prefix = process.env.NODE_ENV === "production" ? "/livingwaters" : "";

const nextConfig = {
  reactStrictMode: true,
  basePath: prefix,
  assetPrefix: prefix,
  images: { unoptimized: true },
};

export default nextConfig;
