import React, { Component } from "react";
import "./NumberGuesser.scss";

export default class NumberGuesser extends Component {
  render() {
    return (
      <section className="NumberGuesser project-page">
        <header>
          <h1>
            Number<span>Guesser</span>
          </h1>
          <p>Ultimate Challenger Edition</p>
        </header>
        <main>
          <section className="inputs-section">
            <h3>Set Range</h3>
            <form className="form-set-range">
              <label htmlFor="min-range">Min Range</label>
              <input type="text" name="min-range" />
              <label htmlFor="max-range">Min Range</label>
              <input type="text" name="max-range" />
              <button className="btn">Update</button>
            </form>
            <form className="form-enter-guesses">
              <div className="challenger-1-inputs">
                <h3>Challenger 1</h3>
                <label htmlFor="challenger-name-1">Name</label>
                <input type="text" name="challenger-name-1" />
                <label htmlFor="challenger-guess-1">Name</label>
                <input type="text" name="challenger-guess-1" />
              </div>
              <div className="challenger-1-inputs">
                <h3>Challenger 2</h3>
                <label htmlFor="challenger-name-2">Name</label>
                <input type="text" name="challenger-name-2" />
                <label htmlFor="challenger-guess-2">Name</label>
                <input type="text" name="challenger-guess-2" />
              </div>
              <div className="challenger-buttons">
                <button className="submit-guess">Submit Guess</button>
                <button className="reset-game">Reset Game</button>
                <button className="clear-game">Clear Game</button>
              </div>
            </form>
            <article className="results-section">
              <h3>Latest Score</h3>
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
            </article>
          </section>
          <section className="outputs-section" />
        </main>
      </section>
    );
  }
}
