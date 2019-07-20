import React from "react";
import "./LatestScore.scss";
import { connect } from "react-redux";

function LatestScore(props) {
  const {
    challengerOneName,
    challengerTwoName,
    challengerTwoGuess,
    challengerOneGuess
  } = props.challengerData;

  const determineProximity = guess => {
    const parsed = parseInt(guess);
    if (parsed > props.storeNumbers.randomNumber) return "That's too high!";
    if (parsed < props.storeNumbers.randomNumber) return "That's too low!";
    if (parsed === props.storeNumbers.randomNumber) return "Winner!";
    return "(Make a guess!)";
  };

  return (
    <section className="container-results-section container">
      <h3>Latest Score</h3>
      <div className="challenger-outputs">
        <aside className="challenger-output-1">
          <h4>{challengerOneName || "Challenger 1 Name"}</h4>
          <p>current guess</p>
          <p>{challengerOneGuess || 0}</p>
          <p>{determineProximity(challengerOneGuess)}</p>
        </aside>
        <aside className="challenger-output-2">
          <h4>{challengerTwoName || "Challenger 2 Name"}</h4>
          <p>current guess</p>
          <p>{challengerTwoGuess || 0}</p>
          <p>{determineProximity(challengerTwoGuess)}</p>
        </aside>
      </div>
    </section>
  );
}

const mapStateToProps = store => ({
  storeNumbers: store.NGNumbers,
  challengerData: store.NGChallengerData
});

export default connect(mapStateToProps)(LatestScore);
