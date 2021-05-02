import React, { Component } from "react";

export default class Resume extends Component {
  render() {
    return (
      <React.Fragment>
        {/* Break up into different components: Education, Career, Skills ... */}
        <section id="resume" className="s-resume target-section">
          <div className="row s-resume__section">
            <div className="column large-3 tab-12">
              <h3 className="section-header-allcaps">Career</h3>
            </div>
            <div className="column large-9 tab-12">
              <div className="resume-block">
                <div className="resume-block__header">
                  <h4 className="h3">Company</h4>
                  <p className="resume-block__header-meta">
                    <span>Role</span>
                    <span className="resume-block__header-date">
                      Date - Present
                    </span>
                  </p>
                </div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Inventore vero quidem nobis maxime dolorem aliquam quisquam
                  eum ipsum amet. Vitae aut atque fuga dolorem. Vel voluptatibus
                  fugiat nam. Impedit aperiam nesciunt facilis! Porro architecto
                  dicta inventore tempora ratione quia odio.
                </p>
              </div>
              <div className="resume-block">
                <div className="resume-block__header">
                  <h4 className="h3">Company</h4>
                  <p className="resume-block__header-meta">
                    <span>Role</span>
                    <span className="resume-block__header-date">Date</span>
                  </p>
                </div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Inventore vero quidem nobis maxime dolorem aliquam quisquam
                  eum ipsum amet. Vitae aut atque fuga dolorem. Vel voluptatibus
                  fugiat nam. Impedit aperiam nesciunt facilis! Porro architecto
                  dicta inventore tempora ratione quia odio.
                </p>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
