import React, { Component } from "react";

class Preloader extends Component {
  render() {
    return (
      <div id="tm-preloader">
        <div className="tm-preloader-in">
          <div className="bar bar-top"></div>
          <div className="bar bar-right"></div>
          <div className="bar bar-bottom"></div>
          <div className="bar bar-left"></div>
        </div>
      </div>
    );
  }
}

export default Preloader;
