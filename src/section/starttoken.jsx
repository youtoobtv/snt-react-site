import React, { Component } from "react";

class Starttoken extends Component {
  render() {
    return (
      <div
        className="tm-token-wrap tm-bg"
        id="featured-company"
        style={{ backgroundImage: "url(assets/img/token-list-bg.jpg)" }}
      >
        <div className="empty-space col-md-b95 col-xs-b60" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tm-token">
                <h2
                  className="tm-token-heading tm-m0 tm-md-f28 tm-md-lh34 wow fadeIn"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.25s"
                >
                  Token Listed
                </h2>
                <div
                  className="tm-token-list wow fadeIn"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.15s"
                >
                  <div
                    className="tm-single-token wow fadeIn"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.35s"
                  >
                    <img src="assets/img/token07.png" alt="" />
                  </div>
                  <div
                    className="tm-single-token wow fadeIn"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.45s"
                  >
                    <img src="assets/img/token08.png" alt="" />
                  </div>
                  <div
                    className="tm-single-token wow fadeIn"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.55s"
                  >
                    <img src="assets/img/token09.png" alt="" />
                  </div>
                </div>
              </div>
              {/* .tm-token */}
              <div
                className="tm-token-bar wow fadeIn"
                data-wow-duration="0.8s"
                data-wow-delay="0.35s"
              >
                <span className="tm-bar-circle" />
                <span className="tm-bar-circle" />
              </div>
              <div className="tm-token">
                <h2
                  className="tm-token-heading tm-m0 tm-md-f28 tm-md-lh34 wow fadeIn"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.25s"
                >
                  Featured On
                </h2>
                <div
                  className="tm-token-list wow fadeIn"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.15s"
                >
                  <div
                    className="tm-single-token  wow fadeIn"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.35s"
                  >
                    <img src="assets/img/token10.png" alt="" />
                  </div>
                  <div
                    className="tm-single-token  wow fadeIn"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.45s"
                  >
                    <img src="assets/img/token11.png" alt="" />
                  </div>
                  <div
                    className="tm-single-token  wow fadeIn"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.55s"
                  >
                    <img src="assets/img/token12.png" alt="" />
                  </div>
                </div>
              </div>
              {/* .tm-token */}
            </div>
          </div>
        </div>
        <div className="empty-space col-md-b95 col-xs-b60" />
      </div>
    );
  }
}

export default Starttoken;
