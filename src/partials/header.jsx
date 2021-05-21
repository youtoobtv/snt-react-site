import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <>
        <header className="tm-site-header">
          <div className="tm-header-menu">
            <div className="container tm-header-menu-container">
              <div className="tm-site-branding">
                {/* For Image Logo */}
                <Link to="/" className="tm-logo-link">
                  <img
                    src="assets/img/logosnt.png"
                    alt=""
                    className="tm-logo"
                  />
                  <img
                    src="assets/img/logosntsmall.png"
                    alt=""
                    className="tm-mobile-logo"
                  />
                </Link>
              </div>
              <nav className="tm-primary-nav tm-section-active">
                <ul className="tm-primary-nav-list">
                  <li className="menu-item">
                    <a href="#about" className="nav-link">
                      About
                    </a>
                  </li>
                  <li className="menu-item">
                    <Link to="/reward" className="nav-link">
                      Rewards
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/donation" className="nav-link">
                      Donations
                    </Link>
                  </li>
                  <li className="menu-item">
                    <a href="#roadmap" className="nav-link">
                      Roadmap
                    </a>
                  </li>
                </ul>

                {/* .tm-language */}
                <div className="tm-menu-meta">
                  <button
                    className="tm-btn tm-style1 tm-with-border"
                    data-toggle="modal"
                    data-target="#tm-login"
                  >
                    Buy SNT
                  </button>
                  <button
                    className="tm-btn tm-style1 tm-with-border"
                    data-toggle="modal"
                    data-target="#tm-signup"
                  >
                    WhitePaper
                  </button>
                </div>
              </nav>
            </div>
            {/* .tm-header-menu-container */}
          </div>
          {/* .tm-header-menu */}
        </header>
        <div className="tm-section-active tm-fix-bar">
          <ul
            className="wow fadeInRight"
            data-wow-duration="0.8s"
            data-wow-delay="0.5s"
          >
            <li>
              <Link to="#home" className="nav-link" />
            </li>
            <li>
              <Link to="#about" className="nav-link" />
            </li>
            <li>
              <Link to="#video" className="nav-link" />
            </li>
            <li>
              <Link to="#howitworks" className="nav-link" />
            </li>
            <li>
              <Link to="#tokensale" className="nav-link" />
            </li>
            <li>
              <Link to="#bounty" className="nav-link" />
            </li>
            <li>
              <Link to="#roadmap" className="nav-link" />
            </li>
            <li>
              <Link to="#team" className="nav-link" />
            </li>
            <li>
              <Link to="#featured-company" className="nav-link" />
            </li>
            <li>
              <Link to="#faq" className="nav-link" />
            </li>
            <li>
              <Link to="#tm-subscribe" className="nav-link" />
            </li>
            <li>
              <Link to="#footer" className="nav-link" />
            </li>
          </ul>
        </div>
      </>
    );
  }
}
export default Header;
