import { config } from "@fortawesome/fontawesome-svg-core";

import { Layout } from "components/layout";

import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

import "styles/globals.scss";
import "styles/fonts.scss";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
