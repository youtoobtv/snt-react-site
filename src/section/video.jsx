import React, { Component } from "react";

class Video extends Component {
  render() {
    return (
      <div className="tm-about-video" id="video">
        <img src="assets/img/video-bg2.jpg" alt="Video Background" />
        <div
          className="tm-video-button js-video-button wow fadeIn"
          data-wow-duration="0.8s"
          data-wow-delay="0.25s"
          data-video-id={553069138}
          data-channel="vimeo"
        >
          <i className="icofont icofont-play-alt-3" />
          <span className="tm-video-animaiton">
            <span />
          </span>
        </div>
      </div>
    );
  }
}
export default Video;
