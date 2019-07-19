import React from "react";
import "./LatestScore.scss";

export default function LatestScore() {
  return (
    <section className="container-results-section container">
      <h3>Latest Score</h3>
      <div className="challenger-outputs">
        <aside className="challenger-output-1">
          <h4>Challenger 1 Name</h4>
          <p>current guess</p>
          <p>50</p>
          <p>that's too high</p>
        </aside>
        <aside className="challenger-output-2">
          <h4>Challenger 2 Name</h4>
          <p>current guess</p>
          <p>45</p>
          <p>that's too low</p>
        </aside>
      </div>
    </section>
  );
}
