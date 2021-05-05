import React, { Component } from "react";

export default class Projects extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="resume" className="s-resume target-section">
          <div className="row s-resume__section">
            <div className="column large-3 tab-12">
              <h3 className="section-header-allcaps">Projects Portfolio</h3>
            </div>
            <div className="column large-9 tab-12">
              <div className="resume-block">
                <div className="resume-block__header">
                  <h4 className="h3">
                    <a href="https://murmuring-bastion-13699.herokuapp.com/">
                      SourcE-commerce <em>(collaboration project)</em>
                    </a>{" "}
                    {" | "}
                    <a href="https://github.com/MissNG-Git/SourcE-commerce">
                      <i class="fab fa-github"></i>
                    </a>
                  </h4>
                </div>
                <p>
                  <strong>Summary:</strong> An application that helps business
                  owners track inventory &#38; sales performance as well as
                  provide an e-commerce storefront for customers.
                  <br />
                  <strong>Role:</strong> Front-End Designer, Back-End Support,
                  Debugger - - Handlebars.js, CSS, JS, Highcharts library, API,
                  routing, MySQL
                  <br />
                  <strong>Tools:</strong> HTML, Handlebars.js, JavaScript,
                  Express.js w/Node, MySQL w/Sequelize, Highcharts.js, Crypto
                  Authentication, Heroku w/ClearDB Git, Bootstrap, GoogleFonts
                  &#38; FontAwesome
                </p>
              </div>

              <div className="resume-block">
                <div className="resume-block__header">
                  <h4 className="h3">
                    <a href="https://luuluu75.github.io//Cocktails-Cuisines/">
                      Cocktails &#38; Cuisines <em>(collaboration project)</em>
                    </a>{" "}
                    {" | "}
                    <a href="https://github.com/MissNG-Git/Cocktails-Cuisines">
                      <i class="fab fa-github"></i>
                    </a>
                  </h4>
                </div>
                <p>
                  <strong>Summary:</strong> A foodie- &#38; drinkie-friendly
                  application that allows users to search for different cuisine
                  or cocktail recipes by name.
                  <br />
                  <strong>Role:</strong> Front-End Designer, Back-End Support,
                  Debugger - - HTML, CSS, JavaScript, ‘Dry’ Code
                  <br />
                  <strong>Tools:</strong> HTML, CSS, JavaScript w/jQuery,
                  Foundation framework, Local and Server-side APIs, Git,
                  GoogleFonts &#38; FontAwesome
                </p>
              </div>

              <div className="resume-block">
                <div className="resume-block__header">
                  <h4 className="h3">
                    <a href="https://burglog-00.herokuapp.com/">
                      Burger-Logger
                    </a>{" "}
                    {" | "}
                    <a href="https://github.com/MissNG-Git/Burger-Logger">
                      <i class="fab fa-github"></i>
                    </a>
                  </h4>
                </div>
                <p>
                  <strong>Summary:</strong> A restaurant app that lets users
                  track the burgers they’d like to eat and burgers they have
                  devoured.
                  <br />
                  <strong>Role:</strong> Sole author
                  <br />
                  <strong>Tools:</strong> JavaScript, Handlebars.js, Node
                  w/Express.js, API, MySQL, ORM, Heroku w/JawsDB, Git,
                  Bootstrap, GoogleFonts &#38; FontAwesome
                </p>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
