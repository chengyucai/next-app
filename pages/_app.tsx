import App, { Container } from "next/app";
import React from "react";
import { Provider } from "react-redux";
import Router from "@components/router";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
import createStore from "@root/redux/store";

interface MyApp_props extends App {
  Component: any;
  pageProps: any;
  store: any;
}

const MyApp: React.FC<MyApp_props> = props => {
  const { Component, pageProps, store } = props;
  return (
    <Container>
      <link
        rel="stylesheet"
        type="text/css"
        href={"/_next/static/css/styles.chunk.css?v=" + Date.now()}
      />
      <Provider store={store}>
        {process.env.NODE_ENV === "development" && <Router />}
        <Component {...pageProps} />
      </Provider>
    </Container>
  );
};
export default withRedux(createStore)(withReduxSaga(MyApp));
