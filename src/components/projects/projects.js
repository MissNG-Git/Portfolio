import React, { Component } from "react";

export default class Projects extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row s-resume__section">
          <div className="column large-3 tab-12">
            <h3 className="section-header-allcaps">Projects</h3>
          </div>
          <div className="column large-9 tab-12">
            <div className="resume-block">
              <div className="resume-block__header">
                <h4 className="h3">
                  <a href="https://murmuring-bastion-13699.herokuapp.com/">
                    SourcE-commerce
                  </a>
                </h4>
                <p className="resume-block__header-meta">
                  <span>(collaboration project)</span> <br />
                  <span className="resume-block__header-date">
                    <a href="https://github.com/MissNG-Git/SourcE-commerce">
                      GitHub Repository
                    </a>
                  </span>
                </p>
              </div>
              <p>
                An application that helps business owners track inventory &#38;
                sales performance as well as provide an e-commerce storefront
                for customers.
              </p>
              <span>
                <strong>Role</strong>
                <ul>
                  <li>
                    Front-End Designer, Back-End Support, Debugger: <br />
                    Handlebars.js, CSS, JS, Highcharts library, API, routing,
                    MySQL
                  </li>
                </ul>
                <strong>Tools</strong>
                <ul>
                  <li>
                    HTML, Handlebars.js, JavaScript, Express.js w/Node, MySQL
                    w/Sequelize, Highcharts.js, Crypto Authentication, Heroku
                    w/ClearDB Git, Bootstrap, GoogleFonts &#38; FontAwesome
                  </li>
                </ul>
              </span>
            </div>

            <div className="resume-block">
              <div className="resume-block__header">
                <h4 className="h3">
                  <a href="https://luuluu75.github.io//Cocktails-Cuisines/">
                    Cocktails &#38; Cuisines
                  </a>
                </h4>
                <p className="resume-block__header-meta">
                  <span>(collaboration project)</span> <br />
                  <span className="resume-block__header-date">
                    <a href="https://github.com/MissNG-Git/Cocktails-Cuisines">
                      GitHub Repository
                    </a>
                  </span>
                </p>
              </div>
              <p>
                A foodie- &#38; drinkie-friendly application that allows users
                to search for different cuisine or cocktail recipes by name.
              </p>
              <span>
                <strong>Role</strong>
                <ul>
                  <li>
                    Front-End Designer, Back-End Support, Debugger: <br />
                    HTML, CSS, JavaScript, ‘Dry’ Code
                  </li>
                </ul>
                <strong>Tools</strong>
                <ul>
                  <li>
                    HTML, CSS, JavaScript w/jQuery, Foundation framework, Local
                    &#38; Server-side APIs, Git, GoogleFonts &#38; FontAwesome
                  </li>
                </ul>
              </span>
            </div>

            <div className="resume-block">
              <div className="resume-block__header">
                <h4 className="h3">
                  <a href="https://missng-git.github.io/DIRemptory">
                    DIRemptory
                  </a>
                </h4>
                <p className="resume-block__header-meta">
                  <span className="resume-block__header-date">
                    <a href="https://github.com/MissNG-Git/DIRemptory">
                      GitHub Repository
                    </a>
                  </span>
                </p>
              </div>
              <p>
                An employee directory created to allow the ability to view
                non-sensitive data about other employees.
              </p>
              <span>
                <strong>Role</strong>
                <ul>
                  <li>Sole author</li>
                </ul>
                <strong>Tools</strong>
                <ul>
                  <li>
                    React.js, HTML, CSS, JavaScript, GitHub pages, GitBash,
                    Random User API (third-party API)
                  </li>
                </ul>
              </span>
            </div>

            <div className="resume-block">
              <p>
                <em>
                  ** Visit my GitHub{" "}
                  <a href="https://github.com/MissNG-Git">here</a>. **
                </em>
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
