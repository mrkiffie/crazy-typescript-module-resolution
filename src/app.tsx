import * as React from "react";
import { render } from "react-dom";

import { Button } from "Button";
import { MyContainer } from "MyContainer";

export const App: React.SFC = () => (
  <MyContainer>
    <Button>Click Me!</Button>
  </MyContainer>
);

render(<App />, document.getElementById("root"));
