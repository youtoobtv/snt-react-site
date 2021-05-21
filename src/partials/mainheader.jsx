import React, { Component } from "react";
import {Link} from "react-router-dom"
class Mainheader extends Component {

  gohome = async () => {
    this.props.history.push('/')
  }

  render() {
    return (
      <>
        <header className="tm-site-header">
        <div className="tm-header-menu">
            <div className=" tm-header-menu-container">
              <div className="tm-site-branding">
                {/* For Image Logo */}
                <Link to="/" className="tm-logo-link">
                  <img
                    src="assets/img/logosntsmall.png"
                    alt=""
                    className="tm-logo"
                  />
                  <img
                    src="assets/img/logosnt.png"
                    alt=""
                    className="tm-mobile-logo"
                  />
                </Link>
                {/* For Site Title */}
                {/* <span class="tm-site-title">
                  <a href="index.html">Ocher</a>
              </span> */}
              </div>
              <nav className="tm-primary-nav tm-section-active">
                
                {/* .tm-language */}
                <div className="tm-menu-meta">
                  <button
                    className="tm-btn tm-style1 tm-with-border "
                    data-toggle="modal"
                    data-target="#tm-login"
                    onClick={this.gohome}
                  >
                    Home
                  </button>
                  <button
                    className="tm-btn tm-style1 tm-with-border "
                    data-toggle="modal"
                    data-target="#tm-signup"
                    onClick={this.props.connect}
                    disabled={this.props.buttonadd} 
                  >
                    {this.props.address}
                  </button>
                </div>
              </nav>
            </div>
            {/* .tm-header-menu-container */}
          </div>
          {/* .tm-header-menu */}
        </header>
      </>
    );
  }
}
export default Mainheader;
