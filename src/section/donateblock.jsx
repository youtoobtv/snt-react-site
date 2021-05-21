import React, { Component } from "react";

class Donationblock extends Component {
  gohome = async () => {
    this.props.history.push("/");
  };

  goapp = async () => {
    this.props.history.push("/app");
  };

  render() {
    return (
      <>
        <section
          className="tm-mainblock-section tm-style1 tm-bg"
          id="home"
          style={{ backgroundImage: "url(assets/img/hero-bg-v2.jpg)" }}
        >
          <div className="container">
            <div className="row align-items-start ">
              <div
                className="donateblockhead  col wow zoomIn"
                data-wow-duration="1.25s"
                data-wow-delay="2.55s"
              >
                <span>Sanctuary Token</span>
                <p>
                  At Sanctuary, we don’t just want to be another pump and dump,
                  we want to build something that last and helps to change the
                  world by doing one good deed at a time.
                </p>
                <p>
                  All you need to do to get this reward is donate either 1000,
                  2500, or 5000 tokens to our donation wallet between the 1st
                  and 15th of the month, and at the end of the month we will pay
                  you either 10% 15% or 20% on top of your initial investment.
                </p>
              </div>
            </div>
            <div className="empty-space col-xs-b10" />
            <div className="row align-items-start ">
              <div
                className="donateblock  col wow zoomIn"
                data-wow-duration="1.25s"
                data-wow-delay="0.55s"
              >
                <h2>Please Click On Button To Donate</h2>
                <h3>Current project we are donating to: Link</h3>
                <select
                  className="selectpicker tokendonate"
                  data-live-search="true"
                  defaultValue={this.props.donateamount}
                  onChange={this.props.changeamount}
                >
                  <option data-tokens="ketchup mustard">1000</option>
                  <option data-tokens="mustard">2500</option>
                  <option data-tokens="frosting">5000</option>
                </select>

                <button
                  type="button"
                  className="btn btn-success btn-lg"
                  onClick={this.props.donateme}
                >
                  Donate Us
                </button>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Donationblock;
