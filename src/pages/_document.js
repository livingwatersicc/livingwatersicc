import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          key={"title"}
          property="og:title"
          content={"Living Waters Church"}
        />
        <meta
          key={"description"}
          property="og:description"
          content={
            "Living Waters International Christian Church is a non-denominational, Bible believing christian community who seek to follow Christ."
          }
        />
        <meta
          key={"image"}
          property="og:image"
          content={"https://www.livingwaterschurch.org.nz/logo.png"}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content="Living Waters International Christian Church"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
