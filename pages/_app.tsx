import App, { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { Provider } from 'react-redux';
import Router from 'next/router';
import RouterList from '@components/router';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import createStore from '@root/redux/store';
import Header from '@components/hd_test';

interface MyApp_props {
    Component: any;
    pageProps: any;
    store: any;
}

const MyApp = (props: MyApp_props) => {
    const { Component, pageProps, store } = props;

    // eslint-disable-next-line prettier/prettier
    const action = (type: any, payload: {} = {}) => store.dispatch({ type, payload });
    const handleRouteChange = (url: any) => {
        console.log('App is changing to: ', url);
    };
    React.useEffect(() => {
        Router.events.on('routeChangeStart', handleRouteChange);
        Router.events.on('routeChangeComplete', handleRouteChange);

        return () => {
            Router.events.off('routeChangeStart', handleRouteChange);
            Router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, []);
    // React.useEffect(() => {

    //     return () => {
    //         Router.events.off('routeChangeStart', handleRouteChange);
    //     };
    // }, []);

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
                {process.env.NODE_ENV === 'development' && <RouterList />}
                <Header action={action} />
                <Component {...pageProps} action={action} />
            </Provider>
        </Container>
    );
};

MyApp.getInitialProps = async ({ Component, ctx }: any) => {
    let pageProps = {};

    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
};
export default withRedux(createStore)(withReduxSaga(MyApp));
