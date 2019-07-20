import React, { Component } from "react";
import { calcRandomNum } from "../../../../_utils/helpers";
import { connect } from "react-redux";
import * as actions from "../../../../_redux/actions";
import TextInput from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import "./SetRange.scss";

class SetRange extends Component {
  state = {
    minRange: "",
    maxRange: "",
    submitted: false
  };

  componentDidMount() {
    this.initialRandomNumber();
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: parseInt(value) || "" });
  };

  handleClick = e => {
    e.preventDefault();
    const { minRange, maxRange } = this.state;
    const randomNumber = calcRandomNum(minRange || 0, maxRange || 100);
    this.props.setNumbers({ minRange, maxRange, randomNumber, guess: 0 });
    this.setState({ minRange: "", maxRange: "" });
  };

  initialRandomNumber = () => {
    const { minRange, maxRange } = this.state;
    const randomNumber = calcRandomNum(minRange || 0, maxRange || 100);
    this.props.setNumbers({
      minRange: "",
      maxRange: "",
      randomNumber,
      guess: 0
    });
  };

  render() {
    return (
      <section className="SetRange">
        <h3>{this.props.title}</h3>
        <form className="form-set-range">
          <div className="inputs">
            <TextInput
              label="Min Range"
              name="minRange"
              value={this.state.minRange}
              autoComplete="off"
              handleChange={this.handleChange}
              width="165px"
            />
            <TextInput
              label="Max Range"
              name="maxRange"
              value={this.state.maxRange}
              autoComplete="off"
              handleChange={this.handleChange}
              width="165px"
            />
          </div>
          <Button
            backgroundColor="darkgrey"
            border="none"
            borderRadius="50px"
            textColor="white"
            text="Update"
            width="100px"
            height="35px"
            handleClick={this.handleClick}
          />
        </form>
      </section>
    );
  }
}

const mapStateToProps = store => ({
  numbersData: store.NGNumbers,
  challengerData: store.NGChallengerData
});

const mapDispatchToProps = dispatch => ({
  setNumbers: number => dispatch(actions.setNumbers(number))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetRange);
