import Document, { Html, Head, Main, NextScript } from "next/document";

import React from "react";

// import "./style.scss";
// const stlye = require("./style.scss");

interface MyDocument_props extends React.FC {
  getInitialProps?: any;
}

const MyDocument: MyDocument_props = props => {
  console.log("_document", props);
  return (
    <Html>
      <Head></Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

// class MyDocument extends Document {
//   //   static async getInitialProps(ctx: any) {
//   //     const initialProps = await Document.getInitialProps(ctx);
//   //     return { ...initialProps };
//   //   }

//   render() {
//     console.log("_document");
//     return (
//       <Html>
//         <Head></Head>
//         <body>
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     );
//   }
// }

export default MyDocument;
