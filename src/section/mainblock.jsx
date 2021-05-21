import React, { Component } from "react";

class Mainblock extends Component {
  render() {
    let claimtime = String(this.props.claimtimestamp)
    return (
      <section
        className="tm-mainblock-section tm-style1 tm-bg"
        id="home"
        style={{ backgroundImage: "url(assets/img/hero-bg-v2.jpg)" }}
      >
        <div className="container">
          <div className="row align-items-start ">
            <div
              className="promoblock col wow zoomIn"
              data-wow-duration="1.25s"
              data-wow-delay="1.20s"
            >
              <h1>Sanctuary Token</h1>
              <p>Earn BNB While You Hold SNT</p>

              <button type="button" className="btn-success btn-lg buy-btn">
                Buy $SNT
              </button>
            </div>
          </div>

          {this.props.connected ? (
            <>
              <div className="row">
                <div className="empty-space col-xs-b35" />
                <div
                  className="col-lg-6 col-lg-6 wow slideInLeft"
                  data-wow-duration="1.25s"
                  data-wow-delay="0.55s"
                >
                  <div className="main-item-block ">
                    <img src="assets/img/bnbblack.png" alt="bnb"></img>
                    <h3>Total BNB In Reward Pool </h3>
                    <p>{this.props.rewardpool} BNB</p>
                  </div>
                </div>

                <div
                  className="col-lg-6 col-lg-6 wow slideInRight"
                  data-wow-duration="1.25s"
                  data-wow-delay="0.55s"
                >
                  <div className="main-item-block  ">
                    <img src="assets/img/bnbblack.png" alt="bnb"></img>
                    <h3>Your SNT Balance</h3>
                    <p>{this.props.sntbalance} SNT</p>
                  </div>
                </div>
              </div>

              <div className="row align-items-start ">
                <div
                  className="promoblock claimbnb col wow zoomIn"
                  data-wow-duration="1.25s"
                  data-wow-delay="0.55s"
                >
       
                  {claimtime === 0 ? (
                     <p>My collectable BNB: {this.props.claimBnbAmount} BNB</p>
                  ):(
                    <p>Wait  {claimtime}  Before Next Claim</p>
                  )}
                 
                  <button
                    type="button"
                    className={
                      this.props.cantclaim
                        ? `btn-disabled btn-lg claim-btn`
                        : `btn-success btn-lg claim-btn`
                    }
                    disabled={this.props.cantclaim}
                    onClick={this.props.claimbnbend}
                  >
                    Collect My BNB
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="empty-space col-xs-b35" />
              <div className="row align-items-start ">
                <div
                  className="promoblock claimbnb col wow zoomIn"
                  data-wow-duration="1.25s"
                  data-wow-delay="1.55s"
                >
                  <h2>You need to connect wallet to continue</h2>
                  <h3>Please switch to BSC network</h3>
                  <p>
                    Hint: If you do not have BNB wallet, please download
                    Metamask
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    );
  }
}

export default Mainblock;
