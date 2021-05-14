import React, { Component } from "react";
import Projects from "../projects/projects";
import Career from "../career/career";
import Skills from "../skills/skills";
import Education from "../education/education";

export default class Resume extends Component {
  render() {
    return (
      <section id="resume" className="s-resume target-section">
        <div className="Resume">
          <Projects />
          <Career />
          <Skills />
          <Education />
        </div>
      </section>
    );
  }
}
