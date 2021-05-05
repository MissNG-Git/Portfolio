import React, { Component } from "react";
import Divider from "@material-ui/core/Divider";
import Projects from "../projects/projects";
import Career from "../career/career";
import Skills from "../skills/skills";
import Education from "../education/education";

export default class Resume extends Component {
  render() {
    return (
      <div className="Resume">
        <Projects />
        <Divider light />
        <Career />
        <Divider light />
        <Skills />
        <Divider light />
        <Education />
      </div>
    );
  }
}
