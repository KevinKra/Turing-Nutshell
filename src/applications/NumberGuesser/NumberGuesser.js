import React, { Component } from "react";
import TextInput from "./components/Input/Input";
import SetRange from "./components/SetRange/SetRange";
import "./NumberGuesser.scss";

export default class NumberGuesser extends Component {
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
            <section className="container-user-guesses container">
              <form className="form-enter-guesses">
                <div className="challenger-1-inputs">
                  <h3>Challenger 1</h3>
                  <TextInput
                    name="Name"
                    label="challenger-name-1"
                    width="300px"
                  />
                  <TextInput name="Guess" label="challenger-guess-1" />
                </div>
                <div className="challenger-1-inputs">
                  <h3>Challenger 2</h3>
                  <TextInput name="Name" label="challenger-name-2" />
                  <TextInput name="Guess" label="challenger-guess-2" />
                </div>
                <div className="challenger-buttons">
                  <button className="submit-guess">Submit Guess</button>
                  <button className="reset-game">Reset Game</button>
                  <button className="clear-game">Clear Game</button>
                </div>
              </form>
            </section>
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
