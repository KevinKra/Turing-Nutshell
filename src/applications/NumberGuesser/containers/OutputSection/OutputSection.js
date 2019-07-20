import React from "react";
import OutputCard from "../../components/OutputCard/OutputCard";
import { connect } from "react-redux";

function OutputSection(props) {
  const outputCards = props.roundData.map(round => {
    return (
      <OutputCard
        challengerOneName={round.challengerOneName}
        challengerTwoName={round.challengerTwoName}
        winner={round.winner}
        guess={round.guess}
        key={round.id}
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

export default connect(mapStateToProps)(OutputSection);
