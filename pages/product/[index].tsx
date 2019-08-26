import * as React from "react";
import Head from "next/head";
import classNames from "classnames";
import "./css.scss";
import { useRouter } from "next/router";
const About = () => {
  const classnames = "category_";
  const router = useRouter();

  return (
    <div className={classNames(classnames)}>
      <Head>
        <title>{router.query.index}商品頁</title>
      </Head>
      <div className="title">
        {router.query.index}商品頁{router.query.id}
      </div>
    </div>
  );
};

export default About;
