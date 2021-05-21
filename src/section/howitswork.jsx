import React, { Component } from "react";

class Howitworks extends Component {
  render() {
    return (
      <section
        className="tm-ocher-work tm-bg"
        id="howitworks"
        style={{ backgroundImage: "url(assets/img/greeen-adventages.jpg)" }}
      >
        <div className="empty-space col-md-b85 col-xs-b50" />
        <div className="container">
          <div className="tm-section-heading tm-style1">
            <div className="tm-section-heading-left">
              <h2
                className="tm-m0 tm-md-f28 tm-md-lh34 wow fadeInUp"
                data-wow-duration="0.8s"
                data-wow-delay="0.25s"
              >
                Sanctuary <br />
                is the game changer
              </h2>
            </div>
            <div className="tm-section-heading-right">
              <h2
                className="col-xs-b20 tm-md-f28 tm-md-lh34 wow fadeInUp"
                data-wow-duration="0.8s"
                data-wow-delay="0.35s"
              >
                Why?
              </h2>
              <div
                className="tm-f20 tm-md-f15 tm-lh30 tm-md-lh24 wow fadeInUp"
                data-wow-duration="0.8s"
                data-wow-delay="0.45s"
              >
                we aim to change the way the world sees Crypto currency. We will
                do this by rewarding our holders through our rewards system for
                their charitable donations.
              </div>
            </div>
          </div>
          <div className="empty-space col-md-b75 col-xs-b50" />
          <div className="tm-section-heading tm-style2">
            <h2
              className="text-center col-xs-b2 col-xs-t-2 tm-md-f28 tm-md-lh34 wow fadeInUp"
              data-wow-duration="0.8s"
              data-wow-delay="0.45s"
            >
              Look at our adventages
            </h2>
          </div>
          <div className="empty-space col-md-b55 col-xs-b35" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div
                className="tm-single-work wow fadeIn"
                data-wow-duration="0.8s"
                data-wow-delay="0.55s"
              >
                <div className="tm-single-work-icon">
                  <i className="flaticon-ethereum" />
                </div>
                <div className="tm-single-work-text tm-f20 tm-md-f18 tm-md-lh28 tm-lh30">
                  5% tax rewarded <br /> back to holders in BNB
                </div>
              </div>
              <div className="empty-space col-md-b30 col-xs-b30" />
            </div>
            <div className="col-lg-3 col-sm-6">
              <div
                className="tm-single-work wow fadeIn"
                data-wow-duration="0.8s"
                data-wow-delay="0.65s"
              >
                <div className="tm-single-work-icon">
                  <i className="flaticon-strategy" />
                </div>
                <div className="tm-single-work-text tm-f20 tm-md-f18 tm-md-lh28 tm-lh30">
                  5% tax is applied to all buy and sell orders, this is then
                  redistributed back to holders in BNB, your BNB will be
                  rewarded back to you in a weekly cycle
                </div>
              </div>
              <div className="empty-space col-md-b30 col-xs-b30" />
            </div>
            <div className="col-lg-3 col-sm-6">
              <div
                className="tm-single-work wow fadeIn"
                data-wow-duration="0.8s"
                data-wow-delay="0.75s"
              >
                <div className="tm-single-work-icon">
                  <i className="flaticon-block" />
                </div>
                <div className="tm-single-work-text tm-f20 tm-md-f18 tm-md-lh28 tm-lh30">
                  5% tax is taken from all sales and added to the Liquid of the
                  contract this will ensure the liquidity constantly grows
                </div>
              </div>
              <div className="empty-space col-md-b30 col-xs-b30" />
            </div>
            <div className="col-lg-3 col-sm-6">
              <div
                className="tm-single-work wow fadeIn"
                data-wow-duration="0.8s"
                data-wow-delay="0.85s"
              >
                <div className="tm-single-work-icon">
                  <i className="flaticon-decentralized" />
                </div>
                <div className="tm-single-work-text tm-f20 tm-md-f18 tm-md-lh28 tm-lh30">
                  Whale Protection We have set a Max buy and Sell of 80,000 SNT,
                  meaning there is a limited chance of whales, each wallet can
                  only buy a max of 80,000 SNT.
                </div>
              </div>
              <div className="empty-space col-md-b30 col-xs-b30" />
            </div>
          </div>
        </div>
        <div className="empty-space col-md-b60 col-xs-b30" />
      </section>
    );
  }
}

export default Howitworks;
