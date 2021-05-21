import React, { Component, lazy, Suspense } from "react";

import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import smartcontract from "../contractabi.json";

// import Donationhead from "../partials/donateheader";
// import Donationblock from "../section/donateblock";

import Preloader from "../section/preloader";

const Donationhead = lazy(() => import("../partials/donateheader"));
const Donationblock = lazy(() => import("../section/donateblock"));
const Faq = lazy(() => import("../section/faqdonation"));


let web3Modal;
let providerOptions;
let provider;

class donations extends Component {
  changeamount = async (amount) => {
    amount = Number(amount.target.value) * 1000000000;
    this.setState({ donateamount: amount });
  };

  donatesome = async () => {
    console.log("donate mee");
    const web3 = new Web3(provider, "https://bsc-dataseed1.binance.org:443");
    let bnbaddress = await web3.eth.getAccounts();
    let sntcontract = new web3.eth.Contract(
      smartcontract.contract,
      smartcontract.tokenaddrsss
    );
    sntcontract.methods
      .transfer(
        "0x861b55Aa636629E470d74a0B7B39d84Ccfdc6671",
        this.state.donateamount
      )
      .send({ from: bnbaddress[0] });
  };

  constructor(props) {
    super(props);
    this.state = { donateamount: 1000 };
  }

  componentDidMount() {
    providerOptions = {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          rpc: {
            1: "https://bsc-dataseed.binance.org/",
          },
          // Mikko's test key - don't copy as your mileage may vary
          infuraId: "6e7534fd1a244b32899da268cd9ec01f",
        },
      },
    };
    web3Modal = new Web3Modal({
      cacheProvider: true, // optional
      providerOptions, // required
    });
    this.connect();
  }

  connect = async () => {
    try {
      provider = await web3Modal.connect();
      //   this.donatesome()
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <>
        <Suspense fallback={<Preloader />}>
          <Donationhead history={this.props.history} />
          <Donationblock
            donateme={this.donatesome}
            donateamount={this.state.donateamount}
            changeamount={this.changeamount}
          />
          <Faq/>
        </Suspense>
      </>
    );
  }
}

export default donations;
