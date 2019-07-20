import React from "react";

export default function OutputCard() {
  return (
    <article className="OutputCard">
      <header>
        <h4>Challenger 1 name</h4>
        <p>VS</p>
        <h4>Challenger 2 name</h4>
      </header>
      <main>
        <h2>Challenger 1 name</h2>
        <h3>Winner</h3>
      </main>
      <footer>
        <p>23 Guesses</p>
        <p>.5 minutes</p>
        <i>x</i>
      </footer>
    </article>
  );
}
