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
                    <a href="#top-question">Top Questions</a>
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
                            What does tax mean?
                          </h3>
                          <div className="accordian-body">
                            Tax is applied to every buy and sell transaction,
                            there is a total tax of 9% 5% of the tax is
                            distributed in to the BNB pool which you can collect
                            via (button: claim) 5% is added to the Liquidity
                            pool.
                          </div>
                        </div>
                        {/* .single-accordian */}
                        <div
                          className="single-accordian wow fadeIn"
                          data-wow-duration="0.8s"
                          data-wow-delay="0.35s"
                        >
                          <h3 className="accordian-head tm-green-c tm-f20 tm-md-f16">
                            What is whale protection?
                          </h3>
                          <div className="accordian-body">
                            We have created the contract in such a way, that it
                            limits the max number of tokens one wallet can buy.
                            We have set this limit to 80,000 SNT tokens For
                            example, if you buy 40,000 one week and try to buy
                            50,000 the following week this will not be allowed.
                          </div>
                        </div>
                        {/* .single-accordian */}
                        <div
                          className="single-accordian wow fadeIn"
                          data-wow-duration="0.8s"
                          data-wow-delay="0.45s"
                        >
                          <h3 className="accordian-head tm-green-c tm-f20 tm-md-f16">
                            How does the charity wallet work?
                          </h3>
                          <div className="accordian-body">
                            we will reward our members for donation their tokens
                            the following rewards are possible. 1000 tokens
                            earns 10% after the month is up 2500 tokens earns
                            15% after the month is up 5000 tokens earns 20%
                            after the month is up Payments will be made to
                            members after a donation has taken place.
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
