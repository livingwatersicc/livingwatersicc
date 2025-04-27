const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  sassOptions: {
    prependData: `@import "src/styles/variables.scss";`,
    includePaths: ["../../node_modules"],
  },
};

export default nextConfig;
