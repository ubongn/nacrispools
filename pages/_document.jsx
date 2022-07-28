import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="descreption" content="Welcome to Nacrispools" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

          <meta name="keywords" content="Pool construction" />
          <meta name="robots" content="index, follow" />

          <meta name="language" content="English" />
          <meta
            name="facebook-domain-verification"
            content="1d7s38tr4w6aghkthv8khh5l671del"
          />
          <link
            rel="preload"
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
          />
          <noscript>
            <img
              height="1"
              width="1"
              
              src="https://www.facebook.com/tr?id=461748918788838&ev=PageView&noscript=1"
            />
          </noscript>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
