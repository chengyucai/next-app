// import * as React from "react";
// import Head from "next/head";
// import classNames from "classnames";
// import Link from "next/link";

// // const stlye = require("./css.scss");
// // import "./css.scss";

// const PageIndex = () => {
//   const classnames = "pg_index";
//   return (
//     <div className={classNames(classnames)}>
//       <Head>
//         <title>首頁</title>
//       </Head>
//       Hello world
//       <a href="/about?local=Home">我是A tag</a>
//     </div>
//   );
// };
// export default PageIndex;

import * as React from "react";
import Head from "next/head";
import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, setTitle } from "@root/redux/actions";
import Link from "next/link";
import "./css.scss";
// import { useRouter } from "next/router";

const Home = () => {
  const classnames = "home_";
  const dispatch = useDispatch();
  const { count } = useSelector(
    (state: { countState: any }) => state.countState
  );

  return (
    <div className={classNames(classnames)}>
      <Head>
        <title>首頁</title>
      </Head>
      <div className="title">首頁{count}</div>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default Home;
