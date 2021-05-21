import React, { Component } from "react";

class Faq extends Component {
  render() {
    return (
      <section
        className="tm-faq-wrap tm-bg"
        id="faq"
        style={{ backgroundImage: "url(assets/img/greeen-faq.jpg)" }}
      >
        <div className="empty-space col-md-b90 col-xs-b55" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="tm-comparison-table text-center wow fadeIn"
                data-wow-duration="0.8s"
                data-wow-delay="1s"
              >
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Tokens donated</th>
                        <th>Percentage rewarded</th>
                        <th>Total gained </th>
                        <th>Total tokens at end of donations</th>
                        <th>Max entries</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1000</td>
                        <td>10%</td>
                        <td>100</td>
                        <td>1100</td>
                        <td>50</td>
                      </tr>
                      <tr>
                        <td>2500</td>
                        <td>15%</td>
                        <td>375</td>
                        <td>2875</td>
                        <td>50</td>
                      </tr>

                      <tr>
                        <td>5000</td>
                        <td>20%</td>
                        <td>1000</td>
                        <td>6000</td>
                        <td>50</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* .col */}
          </div>
        </div>
        <div className="empty-space col-md-b90 col-xs-b55" />
        <h2
          className="text-center col-xs-b2 tm-green-c col-xs-t-1 tm-md-f28 tm-md-lh34 wow fadeIn"
          data-wow-duration="0.8s"
          data-wow-delay="0.25s"
        >
          Frequently Asked Questions
        </h2>
        <div className="empty-space col-md-b55 col-xs-b35" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tabs animated-fade">
                <ul className="tab-links">
                  <li
                    className="active wow fadeIn"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.35s"
                  >
                    <a href="#top-question">Donation Faq</a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div id="top-question" className="tab active">
                    <div className="tm-faq">
                      <div className="accordian-wrapper">
                        <div
                          className="single-accordian wow fadeIn"
                          data-wow-duration="0.8s"
                          data-wow-delay="0.25s"
                        >
                          <h3 className="accordian-head tm-green-c tm-f20 tm-md-f16">
                            What if I send less tokens
                          </h3>
                          <div className="accordian-body">
                            if you send less than the required amount of tokens,
                            they you can ask for your tokens back (incurred gas
                            fees) or you can top up the tokens to reach the
                            desired Tier
                          </div>
                        </div>
                        {/* .single-accordian */}
                        <div
                          className="single-accordian wow fadeIn"
                          data-wow-duration="0.8s"
                          data-wow-delay="0.35s"
                        >
                          <h3 className="accordian-head tm-green-c tm-f20 tm-md-f16">
                            what happens if I sent more tokens
                          </h3>
                          <div className="accordian-body">
                            Any additional tokens sent will not be reclaimable,
                            they will be donated to the charity, make sure you
                            only send the tier you have applied and been
                            accepted for how we chose 50 people per tier
                          </div>
                        </div>
                        {/* .single-accordian */}
                        <div
                          className="single-accordian wow fadeIn"
                          data-wow-duration="0.8s"
                          data-wow-delay="0.45s"
                        >
                          <h3 className="accordian-head tm-green-c tm-f20 tm-md-f16">
                            Which countries does populous currently support?
                          </h3>
                          <div className="accordian-body">
                            Ocher is the most functional template for Ethereum
                            block chain ERC Token ICO’S. Switable for star up
                            ICO’s. A token sale, sometimes referred to as an
                            initial coin offering (ICO), is form of rowd-funding
                            for digital currency-related projects.
                          </div>
                        </div>
                        {/* .single-accordian */}
                        <div
                          className="single-accordian wow fadeIn"
                          data-wow-duration="0.8s"
                          data-wow-delay="0.55s"
                        >
                          <h3 className="accordian-head tm-green-c tm-f20 tm-md-f16">
                            What kind security does populous use to protect my
                            account?
                          </h3>
                          <div className="accordian-body">
                            Ocher is the most functional template for Ethereum
                            block chain ERC Token ICO’S. Switable for star up
                            ICO’s. A token sale, sometimes referred to as an
                            initial coin offering (ICO), is form of rowd-funding
                            for digital currency-related projects.
                          </div>
                        </div>
                        {/* .single-accordian */}
                      </div>
                    </div>
                    {/* .tm-faq */}
                  </div>
                </div>
              </div>
            </div>
            {/* .col */}
          </div>
        </div>
        <div className="empty-space col-md-b85 col-xs-b50" />
      </section>
    );
  }
}

export default Faq;
