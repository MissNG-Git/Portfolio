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
                src="https://via.placeholder.com/150"
                alt=""
              />
            </div>
            <div className="column large-9 tab-12 s-about__content">
              <h3>About Me</h3>
              <p>
                Junior full-stack developer adopting over a decade of customer
                service and administrative experience to implement
                client-focused UI within functional web development. Having
                received my full-stack development certificate from the
                University of Sydney, I am excited to further develop the
                multitude of skills acquired in technologies such as JavaScript,
                CSS, MySQL and Mongo, as well as React.js.
              </p>
              <p>
                With a keen eye for detail and a passion for development, I am
                dedicated to creating mobile-first applications that are not
                only eye-catching and innovative, but also practical and
                user-friendly. Each project I take on works around the core
                ideology that providing a positive user experience ensures a
                personal connection is made with the intended audience. An
                example of this is showcased in my latest four-man collaboration
                project where we developed an e-commerce application that not
                only helped businesses track their sales portfolio and
                inventory, but also provided a separate storefront allowing
                customers to place an order for desired products.
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
                  <a href="#0" className="btn btn--download">
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
