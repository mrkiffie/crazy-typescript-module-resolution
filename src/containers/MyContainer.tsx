import * as React from "react";

export class MyContainer extends React.Component<{}, {}> {
  render() {
    const { children } = this.props;
    return <div>{children}</div>;
  }
}
