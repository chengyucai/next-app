import * as React from "react";
import Head from "next/head";
import classNames from "classnames";
import Link from "next/link";

// const stlye = require("./css.scss");
// import "./css.scss";

const PageIndex = () => {
  const classnames = "pg_index";
  return (
    <div className={classNames(classnames)}>
      <Head>
        <title>首頁</title>
      </Head>
      Hello world
      <Link href="/about/[id]" as={`/about/${1234}`}>
        <a>about</a>
      </Link>
      <a href="/about?local=Home">我是A tag</a>
    </div>
  );
};
export default PageIndex;
