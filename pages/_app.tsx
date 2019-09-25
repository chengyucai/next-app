import App, { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { Provider } from 'react-redux';
import Router from '@components/router';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import createStore from '@root/redux/store';
import Header from '@components/hd_test';

interface MyApp_props extends App {
    Component: any;
    pageProps: any;
    store: any;
}

const MyApp: React.FC<MyApp_props> = props => {
    const { Component, pageProps, store } = props;

    // eslint-disable-next-line prettier/prettier
    const action = (type: any, payload: {} = {}) => store.dispatch({ type, payload });

    return (
        <Container>
            <Head>
                {process.env.NODE_ENV === 'development' && (
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href={'/_next/static/css/styles.chunk.css?v=' + Date.now()}
                    />
                )}
            </Head>
            <Provider store={store}>
                {process.env.NODE_ENV === 'development' && <Router />}
                <Header action={action} />
                <Component {...pageProps} action={action} />
            </Provider>
        </Container>
    );
};
export default withRedux(createStore)(withReduxSaga(MyApp));
