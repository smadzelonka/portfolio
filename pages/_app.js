import React from "react";
import "@/styles/globals.css";
import "@/styles/main.scss";
import "semantic-ui-css/semantic.min.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
