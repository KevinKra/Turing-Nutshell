import React from "react";
import "./OutputCard.scss";

export default function OutputCard(props) {
  const pluralizer = input => {
    if (input > 1) return `${input} guesses`;
    if (input === 1) return `${input} guess`;
    return "error";
  };
  const guesses = pluralizer(props.guess);
  return (
    <article className="OutputCard">
      <header>
        <h4>{props.challengerOneName}</h4>
        <p>VS</p>
        <h4>{props.challengerTwoName}</h4>
      </header>
      <main>
        <h2>{props.winner}</h2>
        <h3>Winner</h3>
      </main>
      <footer>
        <p>{guesses}</p>
        <button onClick={() => props.handleClick(props.id)}>x</button>
      </footer>
    </article>
  );
}
