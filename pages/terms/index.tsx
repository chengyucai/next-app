import * as React from "react";
import Head from "next/head";
import classNames from "classnames";
import "./css.scss";

const About = () => {
  const classnames = "terms_";

  return (
    <div className={classNames(classnames)}>
      <Head>
        <title>會員條款頁</title>
      </Head>
      <div className="title">會員條款頁</div>
    </div>
  );
};

export default About;
