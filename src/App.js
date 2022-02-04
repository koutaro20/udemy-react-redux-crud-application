import React from "react";
import { Component } from "react/cjs/react.production.min";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" onChange={() => {console.log("I am clicked.")}} />
      </React.Fragment>
    );
  }
}


export default App;