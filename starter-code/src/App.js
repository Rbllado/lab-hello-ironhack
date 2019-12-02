import React from "react";
import "./App.css";
import NavComponent from "./NavComponent";
import MainComponent from "./MainComponent";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavComponent />
        <div className="container">
          <MainComponent img="/images/icon1.png" title="Declarative" text="" />
          <MainComponent img="/images/icon2.png" title="Components" text="" />
          <MainComponent img="/images/icon3.png" title="Sinlge Way" text="" />
          <MainComponent img="/images/icon4.png" title="JSX" text="" />
        </div>
      </div>
    );
  }
}

export default App;
