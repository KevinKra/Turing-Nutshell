import React from "react";
import OutputCard from "../../components/OutputCard/OutputCard";
import { connect } from "react-redux";
import * as actions from "../../../../_redux/actions";

function OutputSection(props) {
  const outputCards = props.roundData.map(round => {
    return (
      <OutputCard
        challengerOneName={round.challengerOneName}
        challengerTwoName={round.challengerTwoName}
        handleClick={props.removeRound}
        winner={round.winner}
        guess={round.guess}
        key={round.id}
        id={round.id}
      />
    );
  });
  return <section className="OutputSection">{outputCards}</section>;
}

const mapStateToProps = store => ({
  numbersData: store.NGNumbers,
  challengerData: store.NGChallengerData,
  roundData: store.NGRoundData
});

const mapDispatchToProps = dispatch => ({
  removeRound: id => dispatch(actions.removeRound(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OutputSection);
