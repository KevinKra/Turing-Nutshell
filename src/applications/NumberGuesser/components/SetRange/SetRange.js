import React, { Component } from "react";
import TextInput from "../Input/Input";
import Button from "../Button/Button";
import { calcRandomNum } from "../../../../_utils/helpers";
import "./SetRange.scss";

export default class SetRange extends Component {
  state = {
    minRange: 0,
    maxRange: 100
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: parseInt(value) });
  };

  handleClick = e => {
    e.preventDefault();
    const { minRange, maxRange } = this.state;
    console.log(calcRandomNum(minRange, maxRange));
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
              autoComplete="off"
              handleChange={this.handleChange}
              width="165px"
            />
            <TextInput
              label="Max Range"
              name="maxRange"
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
