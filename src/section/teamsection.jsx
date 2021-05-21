import React, { Component } from "react";
import { Link } from "react-router-dom";

class Team extends Component {
  render() {
    return (
      <section
        className="tm-member tm-bg"
        id="team"
        style={{ backgroundImage: "url(assets/img/green-member-bg.jpg)" }}
      >
        <div className="tm-team-wrap">
          <div className="empty-space col-md-b90 col-xs-b55" />
          <h2
            className="text-center col-xs-b2 tm-green-c col-xs-t-1 tm-md-f28 tm-md-lh34 wow fadeInUp"
            data-wow-duration="0.8s"
            data-wow-delay="0.25s"
          >
            Meet Our Team
          </h2>
          <div className="empty-space col-md-b55 col-xs-b35" />
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div
                  className="tm-member-card text-center wow fadeIn"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.35s"
                >
                  <div className="tm-exmember">
                    <div className="tm-member-thumb">
                      <img src="assets/img/member01.jpg" alt="" />
                    </div>
                    <div className="tm-member-desc tm-white-bg">
                      <h3 className="tm-member-name tm-f20 tm-md-f15 tm-blue-c col-xs-b5">
                      Dean
                      </h3>
                      <div className="tm-member-designation tm-f18">
                      Founder
                      </div>
                    </div>
                  </div>
                  <div className="empty-space col-md-b35 col-xs-b25" />
                  <ul className="tm-member-social-btn">
                    <li>
                      <Link
                        to={{ pathname: "https://twitter.com/DeanoXII" }}
                        target="_blank"
                        className="tm-social-btn"
                      >
                        <span>
                          <i className="fa fa-twitter" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={{ pathname: "https://t.me/Sanctuary_Founder" }}
                        target="_blank"
                        className="tm-social-btn"
                      >
                        <span>
                          <i className="fa fa-telegram" />
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="empty-space col-md-b30 col-xs-b30" />
              </div>
              {/* .col */}
              <div className="col-lg-3 col-md-6">
                <div
                  className="tm-member-card text-center wow fadeIn"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.45s"
                >
                  <div className="tm-exmember">
                    <div className="tm-member-thumb">
                      <img src="assets/img/member02.jpg" alt="" />
                    </div>
                    <div className="tm-member-desc tm-white-bg">
                      <h3 className="tm-member-name tm-f20 tm-md-f15 tm-blue-c col-xs-b5">
                      D. Shah
                        
                      </h3>
                      <div className="tm-member-designation tm-f18">
                      Co-Founder/Marketing
                    
                      </div>
                    </div>
                  </div>
                  <div className="empty-space col-md-b35 col-xs-b25" />
                  <ul className="tm-member-social-btn">
                    <li> 
                      <Link
                        to={{ pathname: "https://twitter.com/dshah_9" }}
                        target="_blank"
                        className="tm-social-btn"
                      > 
                        <span>
                          <i className="fa fa-twitter" />
                        </span>
                      </Link>
                    </li>
                    <li>
                    <Link
                        to={{ pathname: "https://t.me/SanctuaryLion" }}
                        target="_blank"
                        className="tm-social-btn"
                      > 
                        <span>
                          <i className="fa fa-telegram" />
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="empty-space col-md-b30 col-xs-b30" />
              </div>
              {/* .col */}
              <div className="col-lg-3 col-md-6">
                <div
                  className="tm-member-card text-center wow fadeIn"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.55s"
                >
                  <div className="tm-exmember">
                    <div className="tm-member-thumb">
                      <img src="assets/img/member03.jpg" alt="" />
                    </div>
                    <div className="tm-member-desc tm-white-bg">
                      <h3 className="tm-member-name tm-f20 tm-md-f15 tm-blue-c col-xs-b5">
                      Kiyong
                      </h3>
                      <div className="tm-member-designation tm-f18">
                      Community Head
                      </div>
                    </div>
                  </div>
                  <div className="empty-space col-md-b35 col-xs-b25" />
                  <ul className="tm-member-social-btn">
                    <li>
                    <Link
                        to={{ pathname: "https://twitter.com/desmond_kiyong" }}
                        target="_blank"
                        className="tm-social-btn"
                      > 
                        <span>
                          <i className="fa fa-twitter" />
                        </span>
                      </Link>
                    </li>
                    <li>
                    <Link
                        to={{ pathname: "https://t.me/SanctuaryTiger" }}
                        target="_blank"
                        className="tm-social-btn"
                      > 
                        <span>
                          <i className="fa fa-telegram" />
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="empty-space col-md-b30 col-xs-b30" />
              </div>
              {/* .col */}
              <div className="col-lg-3 col-md-6">
                <div
                  className="tm-member-card text-center wow fadeIn"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.65s"
                >
                  <div className="tm-exmember">
                    <div className="tm-member-thumb">
                      <img src="assets/img/member04.jpg" alt="" />
                    </div>
                    <div className="tm-member-desc tm-white-bg">
                      <h3 className="tm-member-name tm-f20 tm-md-f15 tm-blue-c col-xs-b5">
                        Honey Singh
                      </h3>
                      <div className="tm-member-designation tm-f18">
                      Head Developer
                      </div>
                    </div>
                  </div>
                  <div className="empty-space col-md-b35 col-xs-b25" />
                  <ul className="tm-member-social-btn">
                    <li>
                    <Link
                        to={{ pathname: "https://twitter.com/HoneySi95978234" }}
                        target="_blank"
                        className="tm-social-btn"
                      > 
                        <span>
                          <i className="fa fa-twitter" />
                        </span>
                      </Link>
                    </li>
                    <li>
                    <Link
                        to={{ pathname: "https://t.me/ronnekeren" }}
                        target="_blank"
                        className="tm-social-btn"
                      > 
                        <span>
                          <i className="fa fa-telegram" />
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="empty-space col-md-b30 col-xs-b30" />
              </div>
              {/* .col */}
            </div>
          </div>
        </div>
        {/* .tm-team-wrap */}

        {/* .tm-advisor-wrap */}
      </section>
    );
  }
}

export default Team;
