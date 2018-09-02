import React, { Component } from "react";
import Overview from "../Overview/Overview";
import Header from "../Header/Header";
import Landing from "../Landing/Landing";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Landing />
        <Overview />
      </div>
    );
  }
}

export default App;
