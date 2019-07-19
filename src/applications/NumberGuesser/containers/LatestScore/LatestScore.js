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
  return (
    <section className="container-results-section container">
      <h3>Latest Score</h3>
      <div className="challenger-outputs">
        <aside className="challenger-output-1">
          <h4>{challengerOneName || "Challenger 1 Name"}</h4>
          <p>current guess</p>
          <p>{challengerOneGuess || 0}</p>
          <p>that's too high</p>
        </aside>
        <aside className="challenger-output-2">
          <h4>{challengerTwoName || "Challenger 2 Name"}</h4>
          <p>current guess</p>
          <p>{challengerTwoGuess || 0}</p>
          <p>that's too low</p>
        </aside>
      </div>
    </section>
  );
}

const mapStateToProps = store => ({
  challengerData: store.NGChallengerData
});

export default connect(mapStateToProps)(LatestScore);
