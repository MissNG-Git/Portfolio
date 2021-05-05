import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="about" className="s-about target-section">
          <div className="row">
            <div className="column large-3 tab-12">
              <img
                className="s-about__pic"
                src="/images/avatars/MissNg.jpg"
                alt=""
              />
            </div>
            <div className="column large-9 tab-12 s-about__content">
              <h3>About Me</h3>
              <p>
                A detailed, junior developer utilizing over a decade of customer
                service and administrative experience to create client-focused
                UI within functional web development. Earned a certificate in
                Full-Stack Web Development from the University of Sydney. Aspire
                to create user-friendly, mobile-first applications. Strengths in
                creativity, teamwork and motivation to further career in the
                coding industry.
              </p>
              <p>
                My journey into the world of web development is only just
                beginning, and I am enthused at the opportunity to contribute my
                skills to a team with the same passion for raising the standards
                for what a positive web experience should be.
              </p>
              <hr />
              <div className="row s-about__content-bottom">
                <div className="column w-1000-stack">
                  <h3>Contact Details</h3>
                  <p>
                    Jessie Ng
                    <br />
                    Dee Why, NSW 2099 Australia <br />
                    <a href="tel:+61478100994">+61 478 100 994</a> <br />
                    <a href="mailto:MissNg.dev@gmail.com">
                      MissNg.dev@gmail.com
                    </a>
                  </p>
                </div>
                <div className="column w-1000-stack">
                  <a href="/CV.pdf" className="btn btn--download">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      style={{
                        fill: "rgba(0, 0, 0, 1)",
                        transform: "",
                        msFilter: "",
                      }}
                    >
                      <path d="M12 16L16 11 13 11 13 4 11 4 11 11 8 11z" />
                      <path d="M20,18H4v-7H2v7c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2v-7h-2V18z" />
                    </svg>
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
