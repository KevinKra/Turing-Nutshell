import React, { Component } from "react";
import { calcRandomNum } from "../../../../_utils/helpers";
import "./ChallengerSection.scss";
import TextInput from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { connect } from "react-redux";
import * as actions from "../../../../_redux/actions";

class ChallengerSection extends Component {
  state = {
    challengerOneName: "",
    challengerTwoName: "",
    challengerOneGuess: "",
    challengerTwoGuess: ""
  };

  handleChangeText = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleChangeNumber = e => {
    const { name, value } = e.target;
    this.setState({ [name]: parseInt(value) || "" });
  };

  handleSubmit = e => {
    e.preventDefault();
    const {
      challengerOneName,
      challengerOneGuess,
      challengerTwoName,
      challengerTwoGuess
    } = this.state;
    this.props.updateChallengerData({
      challengerOneName,
      challengerOneGuess,
      challengerTwoName,
      challengerTwoGuess
    });
  };

  handleClear = e => {
    e.preventDefault();
    this.setState({
      challengerOneName: "",
      challengerOneGuess: "",
      challengerTwoName: "",
      challengerTwoGuess: ""
    });
    this.props.clearChallengerData();
  };

  handleReset = e => {
    e.preventDefault();
    this.setState({
      challengerOneName: "",
      challengerOneGuess: "",
      challengerTwoName: "",
      challengerTwoGuess: ""
    });
    this.props.resetGame();
    const randomNumber = calcRandomNum(0, 100);
    this.props.setNumbers({ minRange: "", maxRange: "", randomNumber });
  };

  render() {
    return (
      <section className="container-user-guesses container">
        <p>
          The Current Range is{" "}
          <span className="underline">
            {this.props.NGNumbers.minRange || 1}
          </span>{" "}
          to{" "}
          <span className="underline">
            {this.props.NGNumbers.maxRange || 100}
          </span>
        </p>
        <form className="form-enter-guesses">
          <div className="challenger-1-inputs">
            <h3>Challenger 1</h3>
            <TextInput
              name="challengerOneName"
              label="Name"
              value={this.state.challengerOneName}
              autoComplete="off"
              handleChange={this.handleChangeText}
            />
            <TextInput
              name="challengerOneGuess"
              label="Guess"
              value={this.state.challengerOneGuess}
              autoComplete="off"
              handleChange={this.handleChangeNumber}
            />
          </div>
          <div className="challenger-1-inputs">
            <h3>Challenger 2</h3>
            <TextInput
              name="challengerTwoName"
              label="Name"
              value={this.state.challengerTwoName}
              autoComplete="off"
              handleChange={this.handleChangeText}
            />
            <TextInput
              name="challengerTwoGuess"
              label="Guess"
              value={this.state.challengerTwoGuess}
              autoComplete="off"
              handleChange={this.handleChangeNumber}
            />
          </div>
          <div className="challenger-buttons">
            <Button
              className="submit-guess"
              text="Submit Guess"
              handleClick={this.handleSubmit}
            />
            <Button
              className="reset-game"
              text="Reset Game"
              handleClick={this.handleReset}
            />
            <Button
              className="clear-game"
              text="Clear Game"
              handleClick={this.handleClear}
            />
          </div>
        </form>
      </section>
    );
  }
}

const mapStateToProps = store => ({
  challengerData: store.NGChallengerData,
  NGNumbers: store.NGNumbers
});

const mapDispatchToProps = dispatch => ({
  updateChallengerData: data => dispatch(actions.updateChallengerData(data)),
  clearChallengerData: () => dispatch(actions.clearChallengerData()),
  resetGame: () => dispatch(actions.resetGame()),
  setNumbers: number => dispatch(actions.setNumbers(number))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChallengerSection);
