import React, { Component, Suspense } from "react";
import Web3 from "web3";
import smartcontract from "../contractabi.json";
import timestamp from "unix-timestamp";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Preloader from "../section/preloader";
// import Mainheader from "../partials/mainheader";
// import Mainblock from "../section/mainblock";
const Mainheader = React.lazy(() => import("../partials/mainheader"));
const Mainblock = React.lazy(() => import("../section/mainblock"));

let web3Modal;
let providerOptions;
let provider;
let web3;
let bnbaddress;
let sntbalance;
let sntcontract;

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      connected: false,
      address: "Connect",
      buttonadd: false,
      rewardpool: 0,
      sntbalance: "Null",
      cantclaim: true,
      claimtimestamp: "",
      claimBnbAmount: 0,
    };
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
      cacheProvider: false, // optional
      providerOptions, // required
    });

    this.connect();
  }

  onconnect = async () => {
    console.log("Connected To Wallet");

    web3 = new Web3(provider, "https://bsc-dataseed1.binance.org:443");
    bnbaddress = await web3.eth.getAccounts();
    bnbaddress = bnbaddress[0];

    let sntcontract = new web3.eth.Contract(
      smartcontract.contract,
      smartcontract.tokenaddrsss
    );

    sntbalance = await sntcontract.methods.balanceOf(bnbaddress).call();

    let claimtimestamp = await sntcontract.methods
      .nextAvailableClaimDate(bnbaddress)
      .call();

    let bnbreward = await sntcontract.methods
      .calculateBNBReward(bnbaddress)
      .call();

    if (claimtimestamp !== 0)
      claimtimestamp = String(timestamp.toDate(parseInt(claimtimestamp))).split(
        "GMT"
      )[0];
    else this.setState({ cantclaim: false });

    if (bnbreward === 0) this.setState({ cantclaim: true });

    this.setState({
      address: `${bnbaddress.substr(0, 10)}...`,
      buttonadd: true,
      rewardpool: 1,
      sntbalance: sntbalance / 1000000000,
      connected: true,
      claimtimestamp: claimtimestamp,
      claimBnbAmount: bnbreward,
    });
  };

  connect = async () => {
    try {
      provider = await web3Modal.connect();
      this.onconnect();
    } catch (err) {
      console.error(err);
    }
  };

  claimbnbend = async () => {
    try {
      let collect = await sntcontract.methods
        .claimBNBReward()
        .send({ from: bnbaddress })
        .catch((err) => {
          console.log(err);
        });
      alert("BNB Claimed Successfully");
      console.log(collect);
    } catch (err) {
      alert(err);
      console.error(err);
    }
  };

  render() {
    return (
      <>
        <Suspense fallback={<Preloader />}>
          <Mainheader
            connect={this.connect}
            address={this.state.address}
            buttonadd={this.state.buttonadd}
            history={this.props.history}
          />
          <Mainblock
            connected={this.state.connected}
            rewardpool={this.state.rewardpool}
            sntbalance={this.state.sntbalance}
            cantclaim={this.state.cantclaim}
            claimBnbAmount={this.state.claimBnbAmount}
            claimtimestamp={this.state.claimtimestamp}
            claimbnbend={this.claimbnbend}
          />
        </Suspense>
      </>
    );
  }
}

export default Main;
