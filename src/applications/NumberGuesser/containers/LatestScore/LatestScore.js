import React from "react";
import "./LatestScore.scss";
import { connect } from "react-redux";
import * as actions from "../../../../_redux/actions";
import * as helpers from "../../../../_utils/helpers";

function LatestScore(props) {
  const {
    challengerOneName,
    challengerTwoName,
    challengerTwoGuess,
    challengerOneGuess
  } = props.challengerData;

  const determineProximity = (guess, name) => {
    const parsed = parseInt(guess);
    if (parsed > props.storeNumbers.randomNumber) return "That's too high!";
    if (parsed < props.storeNumbers.randomNumber) return "That's too low!";
    if (parsed === props.storeNumbers.randomNumber) {
      props.addNewRound({
        challengerOneName,
        challengerTwoName,
        winner: name,
        guess: props.storeNumbers.guess,
        id: Date.now()
      });
      props.clearGame();
      const randomNumber = helpers.calcRandomNum(0, 100);
      props.setNumbers({
        minRange: "",
        maxRange: "",
        randomNumber,
        guess: 0
      });
      return "Winner!";
    }
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
          <p>{determineProximity(challengerOneGuess, challengerOneName)}</p>
        </aside>
        <aside className="challenger-output-2">
          <h4>{challengerTwoName || "Challenger 2 Name"}</h4>
          <p>current guess</p>
          <p>{challengerTwoGuess || 0}</p>
          <p>{determineProximity(challengerTwoGuess, challengerTwoName)}</p>
        </aside>
      </div>
    </section>
  );
}

const mapStateToProps = store => ({
  storeNumbers: store.NGNumbers,
  challengerData: store.NGChallengerData
});

const mapDispatchToProps = dispatch => ({
  addNewRound: round => dispatch(actions.addNewRound(round)),
  resetGame: () => dispatch(actions.resetGame()),
  clearGame: () => dispatch(actions.clearGame()),
  setNumbers: numbers => dispatch(actions.setNumbers(numbers))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LatestScore);
