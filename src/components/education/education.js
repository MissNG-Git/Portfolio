import React, { Component } from "react";

export default class Education extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row s-resume__section">
          <div className="column large-3 tab-12">
            <h3 className="section-header-allcaps">Education</h3>
          </div>
          <div className="column large-9 tab-12">
            <div className="resume-block">
              <div className="resume-block__header">
                <h4 className="h3">Full-Stack Web Development Certificate</h4>
                <p className="resume-block__header-meta">
                  <span>University of Sydney</span>
                  <span className="resume-block__header-date-edu">
                    May 2021
                  </span>
                </p>
              </div>
            </div>
            <div className="resume-block">
              <div className="resume-block__header">
                <h4 className="h3">
                  Computer Science &#38; Information Technology Credits
                </h4>
                <p className="resume-block__header-meta">
                  <span>Palm Beach State College</span>
                  <span className="resume-block__header-date-edu">
                    May 2013
                  </span>
                </p>
              </div>
            </div>
            <div className="resume-block">
              <div className="resume-block__header">
                <h4 className="h3">High School Diploma </h4>
                <p className="resume-block__header-meta">
                  <span>Park Vista Community High School</span>
                  <span className="resume-block__header-date-edu">
                    May 2010
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
