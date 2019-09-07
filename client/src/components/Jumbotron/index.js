import React from "react";
import "./style.css";

function Jumbotron(props) {
  return (
    <div 
      className="jumbotron jumbotron-fluid text-center">
        <h1><em>{props.title}</em></h1>
    </div>
  );
}

export default Jumbotron;
