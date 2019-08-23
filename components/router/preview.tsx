import * as React from "react";
import { storiesOf } from "@storybook/react";
import Module from "./index";

storiesOf("router", module).add("router", () => {
  return (
    <div>
      <Module />
    </div>
  );
});
