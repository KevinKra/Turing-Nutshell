import React, { Component } from "react";
import OutputCard from "../../components/OutputCard/OutputCard";

export default class OutputSection extends Component {
  state = {
    cards: []
  };
  render() {
    return (
      <section className="OutputSection">
        <OutputCard />
      </section>
    );
  }
}
