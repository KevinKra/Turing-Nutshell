import React, { Component } from "react";
import * as helpers from "../../../../_utils/helpers";
import "./ChallengerSection.scss";
import TextInput from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { connect } from "react-redux";
import * as actions from "../../../../_redux/actions";

class ChallengerSection extends Component {
  state = {
    challengerOneName: this.props.challengerData.challengerOneName,
    challengerTwoName: this.props.challengerData.challengerTwoName,
    challengerOneGuess: this.props.challengerData.challengerOneGuess,
    challengerTwoGuess: this.props.challengerData.challengerTwoGuess,
    validInputs: true
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
    this.validateInputs();
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
    this.setState({ validInputs: true });
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
    const randomNumber = helpers.calcRandomNum(0, 100);
    this.props.setNumbers({
      minRange: "",
      maxRange: "",
      randomNumber,
      guess: 0
    });
    this.setState({ validInputs: true });
  };

  validateInputs = () => {
    const {
      challengerOneName,
      challengerOneGuess,
      challengerTwoName,
      challengerTwoGuess
    } = this.state;
    const inputsValidatedBool = helpers.inputValidator(
      challengerOneName,
      challengerTwoName,
      challengerOneGuess,
      challengerTwoGuess
    );
    if (inputsValidatedBool) {
      this.props.updateChallengerData({
        challengerOneName,
        challengerOneGuess,
        challengerTwoName,
        challengerTwoGuess
      });
      this.props.updateGuessCounter();
    }
    this.setState({ validInputs: inputsValidatedBool });
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
              validInputs={this.state.validInputs}
              handleChange={this.handleChangeText}
            />
            <TextInput
              name="challengerOneGuess"
              label="Guess"
              value={this.state.challengerOneGuess}
              autoComplete="off"
              validInputs={this.state.validInputs}
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
              validInputs={this.state.validInputs}
              handleChange={this.handleChangeText}
            />
            <TextInput
              name="challengerTwoGuess"
              label="Guess"
              value={this.state.challengerTwoGuess}
              autoComplete="off"
              validInputs={this.state.validInputs}
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
  setNumbers: number => dispatch(actions.setNumbers(number)),
  updateGuessCounter: () => dispatch(actions.updateGuessCounter())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChallengerSection);
