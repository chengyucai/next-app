import * as React from "react";
import Head from "next/head";
import classNames from "classnames";
import Link from "next/link";

// const stlye = require("./css.scss");
// import "./css.scss";
// import tre from "@root/static/images/bg/bg-5.png";

const PageIndex = () => {
  const classnames = "pg_index";
  //   console.log(stlye);
  return (
    <div className={classNames(classnames)}>
      <Head>
        <title>首頁</title>
      </Head>
      Hello world
    </div>
  );
};
export default PageIndex;
