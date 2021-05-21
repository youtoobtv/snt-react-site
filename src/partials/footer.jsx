import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <footer className="tm-site-footer tm-bg" id="footer">
        <div className="empty-space col-md-b90 col-xs-b55" />
        <div className="tm-top-footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <h2
                  className="tm-footer-bar col-xs-b2 tm-green-c col-xs-t-1 tm-md-f28 tm-md-lh34 wow fadeIn"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.25s"
                >
                  Send a message
                </h2>
                <div className="empty-space col-md-b55 col-xs-b30" />
                <form
                  action="assets/php/mail.php.html"
                  className="contact-form col-xs-b1"
                  method="post"
                  id="contact-form"
                >
                  <div
                    className="tm-form-field wow fadeIn"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.3s"
                  >
                    <input type="text" id="name" name="name" required />
                    <span className="bar" />
                    <label>Full Name</label>
                  </div>
                  <div
                    className="tm-form-field wow fadeIn"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.35s"
                  >
                    <input type="text" id="email" name="email" required />
                    <span className="bar" />
                    <label>Email Address</label>
                  </div>
                  <div
                    className="tm-form-field wow fadeIn"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.4s"
                  >
                    <textarea
                      cols={30}
                      rows={10}
                      id="msg"
                      name="msg"
                      required
                      defaultValue={""}
                    />
                    <span className="bar" />
                    <label>Your Message</label>
                  </div>
                  <button
                    className="tm-btn wow fadeIn"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.45s"
                    type="submit"
                    id="submit"
                    name="submit"
                  >
                    <span>Send Message</span>
                  </button>
                </form>
                <div id="tm-alert" />
              </div>
              <div className="col-lg-7">
                <h2
                  className="tm-footer-bar tm-style1 col-xs-b2 tm-green-c text-center col-xs-t-1 tm-md-f28 tm-md-lh34 wow fadeIn"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.25s"
                >
                  Join us in the community
                </h2>
                <div className="empty-space col-md-b55 col-xs-b40" />
                <div className="tm-social-btn-wrap tm-style2 col-xs-b1">
                  <ul>
                    <li
                      className="wow fadeIn"
                      data-wow-duration="0.8s"
                      data-wow-delay="0.3s"
                    >
                      <Link to={{ pathname: "#" }} target="_blank">
                        <i className="fa fa-facebook" />
                        <span>Facebook</span>
                      </Link>
                    </li>
                    <li
                      className="wow fadeIn"
                      data-wow-duration="0.8s"
                      data-wow-delay="0.35s"
                    >
                      <Link to="#">
                        <i className="fa fa-linkedin" />
                        <span>Linkedin</span>
                      </Link>
                    </li>
                    <li
                      className="wow fadeIn"
                      data-wow-duration="0.8s"
                      data-wow-delay="0.4s"
                    >
                      <Link
                        to={{ pathname: "https://twitter.com/sanctuarybsc" }}
                        target="_blank"
                      >
                        <i className="fa fa-twitter" />
                        <span>Twitter</span>
                      </Link>
                    </li>
                    <li
                      className="wow fadeIn"
                      data-wow-duration="0.8s"
                      data-wow-delay="0.45s"
                    >
                      <Link to={{ pathname: "#" }} target="_blank">
                        <i className="fa fa-reddit-alien" />
                        <span>Reddit</span>
                      </Link>
                    </li>
                    <li
                      className="wow fadeIn"
                      data-wow-duration="0.8s"
                      data-wow-delay="0.5s"
                    >
                      <Link
                        to={{ pathname: "https://t.me/Sanctuarybsc" }}
                        target="_blank"
                      >
                        <i className="fa fa-telegram" />
                        <span>Telegram</span>
                      </Link>
                    </li>
                    <li
                      className="wow fadeIn"
                      data-wow-duration="0.8s"
                      data-wow-delay="0.55s"
                    >
                      <Link
                        to={{ pathname: "https://medium.com/@sanctuarybsc" }}
                        target="_blank"
                      >
                        <i className="fa fa-medium" />
                        <span>Medium</span>
                      </Link>
                    </li>
                    <li
                      className="wow fadeIn"
                      data-wow-duration="0.8s"
                      data-wow-delay="0.6s"
                    >
                      <Link
                        to={{ pathname: "https://github.com/Sanctuary-token" }}
                        target="_blank"
                      >
                        <i className="fa fa-github-alt" />
                        <span>Github</span>
                      </Link>
                    </li>
                    <li
                      className="wow fadeIn"
                      data-wow-duration="0.8s"
                      data-wow-delay="0.65s"
                    >
                      <Link to="#">
                        <i className="fa fa-youtube-play" />
                        <span>Youtube</span>
                      </Link>
                    </li>
                  </ul>
                  <Link
                    to="#"
                    className="tm-email-btn2 wow fadeIn"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.7s"
                  >
                    <i className="fa fa-envelope-o" />
                    <div className="tm-social-btn-text">
                      support@icomarch.com
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="empty-space col-md-b95 col-xs-b55" />
        <div className="tm-copyright tm-white-c tm-f20 tm-md-f15">
          <div
            className="container wow fadeInUp"
            data-wow-duration="0.8s"
            data-wow-delay="0.75s"
          >
            © 2021 Sanctuary Token. Developed With ❤️ By Sanctuary Team
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
