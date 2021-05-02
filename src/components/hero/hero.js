import React, { Component } from "react";

export default class Hero extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="hero" className="s-hero target-section">
          <div className="s-hero__bg rellax" data-rellax-speed={-7} />
          <div className="row s-hero__content">
            <div className="column">
              <div className="s-hero__content-about">
                <h1>I am MissNG</h1>
                <h3>
                  I'm a Sydney-based <span>web developer</span>, who enjoys
                  creating mobile-first applications that are not only
                  eye-catching and innovative, but also practical and
                  user-friendly.
                  <a className="smoothscroll" href="#about">
                    Start scrolling
                  </a>{" "}
                  to learn more{" "}
                  <a className="smoothscroll" href="#about">
                    about me!
                  </a>
                  .
                </h3>
                <div className="s-hero__content-social">
                  <a href="https://www.linkedin.com/in/jessie-n-9302b962/">
                    <i className="fab fa-linkedin-in" aria-hidden="true" />
                  </a>
                  <a href="https://github.com/MissNG-Git">
                    <i className="fab fa-github" aria-hidden="true" />
                  </a>
                  <a href="mailto:MissNg.dev@gmail.com">
                    <i className="far fa-envelope" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="s-hero__scroll">
            <a href="#about" className="s-hero__scroll-link smoothscroll">
              <span className="scroll-arrow">
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
                  <path d="M18.707 12.707L17.293 11.293 13 15.586 13 6 11 6 11 15.586 6.707 11.293 5.293 12.707 12 19.414z" />
                </svg>
              </span>
              <span className="scroll-text">Scroll Down</span>
            </a>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
