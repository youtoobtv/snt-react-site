import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <section
        className="tm-about-wrap tm-bg"
        id="about"
        style={{ backgroundImage: "url(assets/img/about-bg.jpg)" }}
      >
        <div className="empty-space col-md-b90 col-xs-b55" />
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="tm-about-img-wrap">
                <div className="tm-about-img">
                  <img src="assets/img/about-img2.png" alt="" />
                  <img
                    src="assets/img/logosntsmall.png"
                    alt=""
                    className="tm-ethereum"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tm-about">
                <h3
                  className="tm-m0 tm-lh40 col-xs-t-1 tm-md-f28 tm-md-lh35 wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.25s"
                >
                  Why should you <br />
                  choose Sanctuary?
                </h3>
                <div className="empty-space col-md-b20 col-xs-b10" />
                <div
                  className="tm-f20 tm-md-f15 tm-m0 tm-lh30 tm-md-lh20 wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.30s"
                >
                  We aim to change the way the world sees Crypto currency. We
                  will do this by rewarding our holders through our rewards
                  system for their charitable donations.
                </div>
                <div className="empty-space col-md-b10 col-xs-b15" />
                <h4
                  className="tm-m0 tm-lh60 tm-md-f28 tm-md-lh34 wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.35s"
                  style={{ lineHeight: "3rem" }}
                >
                  Sanctuary is a new crypto token based on the Binance smart
                  chain.
                </h4>
                <div className="empty-space col-md-b10 col-xs-b10" />
                <div className="tm-about-text tm-f20 tm-md-f15 tm-lh32 tm-md-lh20 col-xs-t-1">
                  <p
                    className="wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.4s"
                  >
                    We believe this will be done through our members, we have
                    created our token in a way that not only has a great use
                    case that benefits holders, but also pays our members to
                    continue to hold thus allowing all of us to grow together.
                  </p>
                  <p
                    className="wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.45s"
                  >
                    Charitable donations are a big part of our believes, we want
                    to be the token that makes a difference in the world,
                    therefore we have created our rewards system, that pays
                    holders to donate to charitable causes picked and decided by
                    the community.
                  </p>
                </div>
              </div>
            </div>
            {/* .col */}
          </div>
        </div>
        <div className="empty-space col-md-b85 col-xs-b55" />
      </section>
    );
  }
}

export default About;
