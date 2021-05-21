import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../assets/css/icofont.css";
import "../assets/css/fontawesome.min.css";
import "../assets/css/plugins.css";
import "../assets/css/slick.min.css";
import "../assets/css/modal.video.min.css";
import "../assets/css/style.css";
import "../assets/css/animate.min.css";

class Hero extends Component {
  render() {
    return (
      <section
        className="tm-hero-section tm-style1 tm-bg"
        id="home"
        style={{ backgroundImage: "url(assets/img/hero-bg-v2.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="tm-hero-text">
                <div className="tm-overflow-hidden">
                  <h1
                    className="tm-hero-title tm-white-c tm-f42 tm-lg-f38 tm-fw-medium tm-m0 tm-lh60 col-xs-t-14 tm-md-f30 tm-md-lh40 wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.7s"
                  >
                    Sanctuary Token <br />
                    The token of the future! <br />
                  </h1>
                </div>
                <div className="empty-space col-xs-b10" />
                <div className="tm-overflow-hidden">
                  <h2
                    className="tm-hero-sub-title tm-white-c tm-f24 tm-m0 tm-lh36 tm-md-f18 tm-md-lh26 wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.9s"
                  >
                    The new BSC token with the aims of changing the world <br />
                  </h2>
                </div>
                <div className="empty-space col-xs-b25" />
                <div className="tm-overflow-hidden">
                  <div
                    className="tm-btn-group wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="1.15s"
                  >
                    <Link to="" className="tm-btn tm-style1">
                      Buy Token
                    </Link>
                    <Link to="" className="tm-btn tm-style1 tm-with-border">
                      Chart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* .col */}
            <div
              className="col-lg-6 wow zoomIn"
              data-wow-duration="1.25s"
              data-wow-delay="1.25s"
            >
              <div className="tm-countdown-outer">
                <div className="tm-countdown-wrap tm-style1 text-center">
                  <div className="tm-countdown-bg" />
                  <div className="tm-countdown-box">
                    <div className="tm-countdown-heading tm-f20 tm-white-c tm-lh16">
                      ICO Ends In
                    </div>
                    <div
                      id="tm-if-expired"
                      className="tm-countdown tm-if-expired"
                    >
                      <div className="countdown-element">
                        <div
                          id="tm-count-days"
                          className="tm-f50 tm-md-f50 tm-green-c tm-fw-medium tm-lh62 tm-oswald-fonts"
                        />
                        <span className="tm-white-c">Days</span>
                      </div>
                      <span className="tm-sep tm-f60 tm-green-c">:</span>
                      <div className="countdown-element">
                        <div
                          id="tm-count-hours"
                          className="tm-f50 tm-md-f50 tm-green-c tm-fw-medium tm-lh62 tm-oswald-fonts"
                        />
                        <span className="tm-white-c">Hours</span>
                      </div>
                      <span className="tm-sep tm-f60 tm-green-c">:</span>
                      <div className="countdown-element">
                        <div
                          id="tm-count-minutes"
                          className="tm-f50 tm-md-f50 tm-green-c tm-fw-medium tm-lh62 tm-oswald-fonts"
                        />
                        <span className="tm-white-c">Minutes</span>
                      </div>
                      <span className="tm-sep tm-f60 tm-green-c">:</span>
                      <div className="countdown-element">
                        <div
                          id="tm-count-seconds"
                          className="tm-f50 tm-md-f50 tm-green-c tm-fw-medium tm-lh62 tm-oswald-fonts"
                        />
                        <span className="tm-white-c">Seconds</span>
                      </div>
                    </div>
                    {/* .tm-countdown */}
                    <div className="tm-token-status-bar tm-f13 tm-white-c">
                      <span className="tm-token-start">Start</span>
                      <span className="tm-token-softcap">Softcap</span>
                      <span className="tm-token-hardcap">Hardcap</span>
                      <div className="tm-token-status-bar-out">
                        <div
                          className="tm-token-status-bar-in"
                          style={{ width: "80%" }}
                        />
                      </div>
                    </div>
                    {/* .tm-token-status-bar */}
                    <div className="empty-space col-xs-b35" />
                    <div className="text-center">
                      <Link to="" className="tm-btn">
                        Contribute Now
                      </Link>
                    </div>
                  </div>
                  {/* .tm-countdown-box */}
                </div>
                {/* .tm-countdown-wrap */}
              </div>
            </div>
            {/* .col */}
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
