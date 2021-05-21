import React, { Component } from "react";

class Donationhead extends Component {

  gohome = async () => {
    this.props.history.push('/')
  }

  goapp = async () => {
    this.props.history.push('/reward')
  }

  render() {
    return (
      <>
        <header className="tm-site-header">
        <div className="tm-header-menu">
            <div className=" tm-header-menu-container">
              <div className="tm-site-branding">
                {/* For Image Logo */}
                <a href="/" className="tm-logo-link">
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
                </a>
         
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
                    onClick={this.goapp}
                  >
                    Reward
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
export default Donationhead;
