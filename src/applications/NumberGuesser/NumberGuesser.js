import React, { Component } from "react";
import { connect } from "react-redux";
import SetRange from "./containers/SetRange/SetRange";
import ChallengerSection from "./containers/ChallengerSection/ChallengerSection";
import LatestScore from "./containers/LatestScore/LatestScore";
import OutputSection from "./containers/OutputSection/OutputSection";
import "./NumberGuesser.scss";

class NumberGuesser extends Component {
  render() {
    return (
      <section className="NumberGuesser project-page">
        <header className="header-primary">
          <h1>
            Number<span>Guesser</span>
          </h1>
          <p>Ultimate Challenger Edition</p>
        </header>
        <main className="main-section">
          <section className="inputs-section">
            <SetRange title="Set Range" />
            <ChallengerSection />
            <LatestScore />
          </section>
          <section className="outputs-section">
            <OutputSection />
          </section>
        </main>
      </section>
    );
  }
}

const mapStateToProps = store => ({
  randomNumber: store.NGRandomNumber
});

export default connect(mapStateToProps)(NumberGuesser);
