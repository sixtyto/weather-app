import React, { Component } from "react";
import TopSection from "./components/top.js";
import BottomSection from "./components/bottom.js";
// import logo from "./logo.svg";
import "./sass/app.scss";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="main-container">
          <TopSection />
          <BottomSection />
        </div>
      </div>
    );
  }
}

export default App;
