import React, { Component } from "react";

export default class Skills extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="resume" className="s-resume target-section">
          <div className="row s-resume__section">
            <div className="column large-3 tab-12">
              <h3 className="section-header-allcaps">Technical Skills</h3>
            </div>
            <div className="column large-9 tab-12">
              <div className="resume-block">
                <div className="resume-block__header">
                  <h4 className="h3">Languages</h4>
                  {/* <p className="resume-block__header-meta">
                    <span>Role</span>
                    <span className="resume-block__header-date">
                      Date - Present
                    </span>
                  </p> */}
                </div>
                <p>
                  <span>HTML, CSS, JavaScript</span>
                </p>
              </div>

              <div className="resume-block">
                <div className="resume-block__header">
                  <h4 className="h3">Frameworks</h4>
                </div>
                <p>
                  <span>React.js library, Express.js, Bootstrap</span>
                </p>
              </div>

              <div className="resume-block">
                <div className="resume-block__header">
                  <h4 className="h3">Databases</h4>
                </div>
                <p>
                  <span>MySQL, MongoDB, IndexedDB</span>
                </p>
              </div>

              <div className="resume-block">
                <div className="resume-block__header">
                  <h4 className="h3">Dev Tools</h4>
                </div>
                <p>
                  <span>
                    Git, GitHub, Heroku, Node.js, Handlebars.js, Visual Studio
                    Code
                  </span>
                </p>
              </div>

              <div className="resume-block">
                <div className="resume-block__header">
                  <h4 className="h3">Other</h4>
                </div>
                <p>
                  <span>
                    jQuery, Sequelize ORM, Mongoose ODM, APIs, JSON, AJAX,
                    Highcharts, Charts.js GoogleFonts, FontAwesome
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
