import React, { Component } from "react";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "React",
    };
  }

  render() {
    return (
      <div>
        <h1>Hello React</h1>
      </div>
    );
  }
}

export default App;
