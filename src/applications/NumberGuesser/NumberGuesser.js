import React, { Component } from "react";
import { connect } from "react-redux";
import SetRange from "./components/SetRange/SetRange";
import ChallengerSection from "./components/ChallengerSection/ChallengerSection";
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
            <section className="container-results-section container">
              <h3>Latest Score</h3>
              <div className="challenger-outputs">
                <aside className="challenger-output-1">
                  <h4>Challenger 1 Name</h4>
                  <p>current guess</p>
                  <p>50</p>
                  <p>that's too high</p>
                </aside>
                <aside className="challenger-output-2">
                  <h4>Challenger 2 Name</h4>
                  <p>current guess</p>
                  <p>45</p>
                  <p>that's too low</p>
                </aside>
              </div>
            </section>
          </section>
          <section className="outputs-section" />
        </main>
      </section>
    );
  }
}

const mapStateToProps = store => ({
  randomNumber: store.NGRandomNumber
});

export default connect(mapStateToProps)(NumberGuesser);
