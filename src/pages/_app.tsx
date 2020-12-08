import App from "next/app";
import { Fragment } from "react";
import { GlobalStyle } from "./../components/layout/style";
import { MovieProvider } from "./../contexts/MovieContext";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Fragment>
        <MovieProvider>
          <GlobalStyle />
          <Component {...pageProps} />
        </MovieProvider>
      </Fragment>
    );
  }
}

export default MyApp;
