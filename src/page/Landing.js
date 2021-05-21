import React, { Component, } from "react";
import Header from "../partials/header.jsx";
import Footer from "../partials/footer.jsx";
import About from "../section/about.jsx";
import Video from "../section/video.jsx";
import Howitworks from "../section/howitswork.jsx";
import Tokensale from "../section/tokensale.jsx";
import Roadmap from "../section/roadmap.jsx";
import Team from "../section/teamsection.jsx";
import Starttoken from "../section/starttoken.jsx";
import Faq from "../section/faq.jsx";
import Subcribe from "../section/subcribe.jsx";

import Hero from "../section/hero.jsx";

class Main extends Component {
  render() {
    return (
      <>
          <Header />
          <Hero />
          <About />
          <Video />
          <Howitworks />
          <Tokensale />
          <Roadmap />
          <Team />
          <Starttoken />
          <Faq />
          <Subcribe />
          <Footer />
      </>
    );
  }
}
export default Main;
