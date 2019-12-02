import React, { Component } from "react";

class NavComponent extends Component {
  render() {
    return (
      <div className="header-nav">
        <nav>
          <img src="/images/ironhack-logo.svg" alt="" />

          <img src="/images/menu-top.svg" alt="" />
        </nav>

        <div className="title">
          <h1>Say hello to ReactJS</h1>
          <h2>
            You will learn a frontend <br/> framework from scratch, <br/> to became an Ninja
            Developer.
          </h2>
          <button>Awesome!</button>
        </div>
      </div>
    );
  }
}

export default NavComponent;
