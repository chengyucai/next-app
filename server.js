require("dotenv").config();
const next = require("next");
const targetFolder =
  process.env.NODE_ENV === "production" ? "proBuild" : ".next";

const app = next({
  dev: process.env.NODE_ENV !== "production"
});
const handler = app.getRequestHandler();
const express = require("express");

const server = express();
const port =
  process.env.NODE_ENV !== "production"
    ? process.env.DEVELOPMENT_PORT || 3000
    : process.env.PRODUCTION_PORT || 80;

app
  .prepare()
  .then(() => {
    // 測試環境開啟 api SERVER
    // if (process.env.NODE_ENV === 'development') {
    const cors = require("cors");

    server.use(cors());

    server.use(express.static(targetFolder));

    server.get("*", (req, res) => {
      return handler(req, res);
    });

    server.listen(port, err => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
