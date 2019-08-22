import * as React from "react";
// import Link from "next/link";
import Head from "next/head";
import Nav from "../components/nav";
import "./style.scss";

const Home =  ()  => (
  <div>
    <Head>
      <title> Home </title>
    </Head>

    <Nav />

    <div className="hero">
      <h1 className="title">Welcome to Next.js!</h1>
      <p className="description">
        To get started, edit <code>pages/index.js</code> and save to reload.
      </p>

      <div className="row">

      </div>
    </div>

  </div>
);

export default Home;
