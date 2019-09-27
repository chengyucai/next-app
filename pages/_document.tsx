import Document, { Html, Head, Main, NextScript } from 'next/document';

import React from 'react';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <style>{`body { margin: 0 } /* custom! */`}</style>
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
