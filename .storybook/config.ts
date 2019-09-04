import { configure } from "@storybook/react";
import './addParameters';

const req = require.context("../components", true, /preview.tsx$/);
// const reqMagaele = require.context('../magaele', true, /preview.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
  // reqMagaele.keys().forEach(filename => reqMagaele(filename));
}


configure(loadStories, module);
