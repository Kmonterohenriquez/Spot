import React, { Component } from "react";
import "./Team.css";
import PageTitle from "../PageTitle/PageTitle";
import { withRouter } from "react-router-dom";
import Person from "./Person";
import teamData from "./PersonData";

class Team extends Component {
  render() {
    const location = this.props.location.pathname;
    return (
      <div className="Team">
        {location === "/" ? null : <PageTitle title="Team" />}
        <div className="container">
          <p className="red-paragraph">best team ever</p>
          <div className="Team-top">
            <h1 className="title-1">The team</h1>
            <button className="primary-btn">join us</button>
          </div>
          <div className="grid-team">
            {teamData.map((person) => (
              <Person key={person.id} person={person} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Team);
