import { config } from "@fortawesome/fontawesome-svg-core";
import { GoogleAnalytics } from "@next/third-parties/google";

import { Layout } from "components/layout";

import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

import "styles/globals.scss";
import "styles/fonts.scss";

export const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <GoogleAnalytics gaId={gaId} />
    </>
  );
}
