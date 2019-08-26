import App, { Container } from "next/app";
import React from "react";
import Router from "@components/router";

interface MyApp_props extends App {
  Component?: any;
  pageProps?: any;
}

const MyApp: React.FC<MyApp_props> = props => {
  const { Component, pageProps } = props;
  console.log("_app");
  return (
    <Container>
      <link
        rel="stylesheet"
        type="text/css"
        href={"/_next/static/css/styles.chunk.css?v=" + Date.now()}
      />
      {process.env.NODE_ENV === "development" && <Router />}

      <Component {...pageProps} />
    </Container>
  );
};
export default MyApp;

// export default const MyApp extends App {
//   // static async getInitialProps({ Component, router, ctx }: defaultProps) {
//   //   let pageProps = {};

//   //   if (Component.getInitialProps) {
//   //     pageProps = await Component.getInitialProps(ctx);
//   //   }

//   //   console.log(Component, router, ctx);
//   //   return { pageProps };
//   // }

//     const { Component, pageProps } = this.props;
//     return (
//       <Container>
//         <Component {...pageProps} />
//       </Container>
//     );
// }
