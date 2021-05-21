import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";

const chartdata1 = {
  labels: [
    "Pre-Sale",
    "Public-Sale",
    "Team",
    "Marketing",
    "Airdrop",
    "Community Fund",
    "Liquidity & listings",
  ],
  datasets: [
    {
      label: "Token Distribution",
      data: [5, 10, 5, 10, 2, 18, 50],
      backgroundColor: [
        "rgba(255, 99, 132, 0.8)",
        "rgba(54, 162, 235, 0.8)",
        "rgba(255, 206, 86, 0.8)",
        "rgba(75, 192, 192, 0.8)",
        "rgba(153, 102, 255, 0.8)",
        "rgba(255, 159, 64, 0.8)",
        "rgba(255,127,77 , 0.8)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
        "rgba(255,127,77 , 1)",
      ],
      borderWidth: 2,
    },
  ],
};

const chartdata2 = {
  labels: ["Team", "Marketing", "Liquidity", "Development"],
  datasets: [
    {
      label: "Token Distribution",
      data: [5, 10, 5, 10],
      backgroundColor: [
        "rgba(255, 99, 132, 0.8)",
        "rgba(54, 162, 235, 0.8)",
        "rgba(255, 206, 86, 0.8)",
        "rgba(75, 192, 192, 0.8)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
      ],
      borderWidth: 2,
    },
  ],
};

class Tokensale extends Component {
  render() {
    return (
      <section className="tm-token-sale tm-dark-green-bg" id="tokensale">
        <div
          className="tm-bg"
          style={{
            backgroundImage: "url(assets/img/greeen-token-sale-bg.jpg)",
          }}
        >
          <div className="empty-space col-md-b85 col-xs-b45" />
          <div className="container">
            <div className="tm-section-heading tm-style1 tm-color2">
              <div className="tm-section-heading-left">
                <h2
                  className="tm-m0 tm-green-c tm-md-f28 tm-md-lh34 wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.25s"
                >
                  What <br />
                  is a token sale?
                </h2>
              </div>
              <div className="tm-section-heading-right">
                <div
                  className="tm-f20 tm-md-f15 tm-lh30 tm-white-c tm-md-lh24 wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.35s"
                >
                  A token sale, sometimes referred to as an ICO, is form of
                  crowd funding for digital currency-related projects. In token
                  sales, purch - asers buy units of a new currency in exchange
                  for legal tender or other digital currencies, such as Bitcoin
                  or Ethereum.
                </div>
              </div>
            </div>
            <div className="empty-space col-md-b75 col-xs-b50" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <h2
                  className="text-center col-xs-b2 col-xs-t-2 tm-green-c tm-md-f28 tm-md-lh34 wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.45s"
                >
                  Token Distribution
                </h2>
                <div className="empty-space col-md-b55 col-xs-b35" />
                <div className="tm-token-distribution col-xs-b1">
                  <div className="tm-token-distribution-left tm-green-token-color1">
                    <ul className="tm-token-distribution-list tm-f20 tm-md-f15 tm-white-c list-one">
                      <li
                        className="wow fadeInUp"
                        data-wow-duration="0.8s"
                        data-wow-delay="0.55s"
                      >
                        <span
                          className="tm-blank "
                          style={{
                            "background-color": "rgba(255, 99, 132, 0.8)",
                          }}
                        />
                        Pre-Sale
                      </li>
                      <li
                        className="wow fadeInUp"
                        data-wow-duration="0.8s"
                        data-wow-delay="0.55s"
                      >
                        <span
                          className="tm-blank "
                          style={{
                            "background-color": "rgba(54, 162, 235, 0.8)",
                          }}
                        />
                        Public-Sale
                      </li>
                      <li
                        className="wow fadeInUp"
                        data-wow-duration="0.8s"
                        data-wow-delay="0.55s"
                      >
                        <span
                          className="tm-blank "
                          style={{
                            "background-color": "rgba(255, 206, 86, 0.8)",
                          }}
                        />
                        Team
                      </li>
                      <li
                        className="wow fadeInUp"
                        data-wow-duration="0.8s"
                        data-wow-delay="0.55s"
                      >
                        <span
                          className="tm-blank "
                          style={{
                            "background-color": "rgba(75, 192, 192, 0.8)",
                          }}
                        />
                        Marketing
                      </li>
                      <li
                        className="wow fadeInUp"
                        data-wow-duration="0.8s"
                        data-wow-delay="0.55s"
                      >
                        <span
                          className="tm-blank "
                          style={{
                            "background-color": "rgba(153, 102, 255, 0.8)",
                          }}
                        />
                        Airdrop
                      </li>
                      <li
                        className="wow fadeInUp"
                        data-wow-duration="0.8s"
                        data-wow-delay="0.55s"
                      >
                        <span
                          className="tm-blank "
                          style={{
                            "background-color": "rgba(255, 159, 64, 0.8)",
                          }}
                        />
                        Community Fund
                      </li>
                      <li
                        className="wow fadeInUp"
                        data-wow-duration="0.8s"
                        data-wow-delay="0.55s"
                      >
                        <span
                          className="tm-blank "
                          style={{
                            "background-color": "rgba(255,127,77 , 0.8)",
                          }}
                        />
                        Liquidity & listing
                      </li>
                    </ul>
                  </div>
                  <div
                    className="tm-token-distribution-right tm-sp-token-distribution wow fadeIn"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.65s"
                  >
                    <Doughnut data={chartdata1} width={500} height={500} />
                  </div>
                </div>
                <div className="empty-space col-lg-b90 col-xs-b55" />
              </div>
              {/* .col */}
              <div className="col-xl-12">
                <h2
                  className="text-center col-xs-b2 col-xs-t-2 tm-green-c tm-md-f28 tm-md-lh34 wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.45s"
                >
                  Token Fund Usage
                </h2>
                <div className="empty-space col-md-b55 col-xs-b35" />
                <div className="tm-token-distribution col-xs-b1">
                  <div
                    className="tm-token-distribution-right wow fadeIn"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.65s"
                  >
                    <Doughnut data={chartdata2} width={500} height={500} />
                  </div>
                  <div className="tm-token-distribution-left tm-green-token-color2">
                    <ul className="tm-token-distribution-list tm-f20 tm-md-f15 tm-white-c list-two">
                      <li
                        className="wow fadeInUp"
                        data-wow-duration="0.8s"
                        data-wow-delay="0.55s"
                      >
                        <span className="tm-blank "
                        style={{ backgroundColor: "rgba(255, 99, 132, 1)"}} />
                        Team
                      </li>
                      <li
                        className="wow fadeInUp"
                        data-wow-duration="0.8s"
                        data-wow-delay="0.55s"
                      >
                        <span className="tm-blank "
                        style={{ backgroundColor: "rgba(54, 162, 235, 1)",}} />
                        Marketing
                      </li>
                      <li
                        className="wow fadeInUp"
                        data-wow-duration="0.8s"
                        data-wow-delay="0.55s"
                      >
                        <span className="tm-blank " 
                        style={{ backgroundColor: "rgba(255, 206, 86, 1)",}}/>
                        Liquidity
                      </li>
                      <li
                        className="wow fadeInUp"
                        data-wow-duration="0.8s"
                        data-wow-delay="0.55s"
                      >
                        <span className="tm-blank"
                        style={{ backgroundColor: "rgba(75, 192, 192, 1)",}} />
                        Development
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* .col */}
            </div>
          </div>
          <div className="empty-space col-md-b95 col-xs-b60" />
        </div>
      </section>
    );
  }
}

export default Tokensale;
