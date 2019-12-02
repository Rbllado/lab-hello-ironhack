import React, { Component } from "react";


const MainComponent  = (props) => {
    return (
      <div className="element">
          <img src={props.img} />
          <h2>{props.title}</h2>
          <p>{props.text}</p>
      </div>
    );
  }

export default MainComponent;
