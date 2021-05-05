import React, { Component } from "react";

export default class Projects extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="portfolio" className="s-portfolio target-section">
          <div className="row s-portfolio__header">
            <div className="column large-12">
              <h3>My Projects</h3>
            </div>
          </div>
          <div className="row collapse block-large-1-4 block-medium-1-3 block-tab-1-2 block-500-stack folio-list">
            <div className="column folio-item">
              <a
                href="https://missng-portfolio.herokuapp.com/"
                id="#modal-01"
                className="folio-item__thumb"
                target="blank"
              >
                <img
                  src="/images/portfolio/coming-soon.png"
                  // srcSet="
                  //  images/portfolio/droplet.jpg    1x,
                  //  images/portfolio/droplet@2x.jpg 2x
                  // "
                  alt="PortfolioThumbnail"
                />
              </a>
            </div>
            {/* end folio-item */}

            <div className="column folio-item">
              <a
                href="https://missng-git.github.io/DIRemptory/"
                id="#modal-02"
                className="folio-item__thumb"
                target="blank"
              >
                <img
                  src="/images/portfolio/coming-soon.png"
                  alt="DIRemptory Thumbnail"
                />
              </a>
            </div>
            {/* end folio-item */}

            <div className="column folio-item">
              <a
                href="https://budget-budgie.herokuapp.com/"
                id="#modal-03"
                className="folio-item__thumb"
                target="blank"
              >
                <img
                  src="/images/portfolio/coming-soon.png"
                  alt="Budget Budgie Thumbnail"
                />
              </a>
            </div>
            {/* end folio-item */}

            <div className="column folio-item">
              <a
                href="http://murmuring-bastion-13699.herokuapp.com/"
                id="#modal-04"
                className="folio-item__thumb"
                target="blank"
              >
                <img
                  src="/images/portfolio/coming-soon.png"
                  alt="SourcE-commerce Thumbnail"
                />
              </a>
            </div>
            {/* end folio-item */}

            <div className="column folio-item">
              <a
                href="https://burglog-00.herokuapp.com/"
                id="#modal-05"
                className="folio-item__thumb"
                target="blank"
              >
                <img
                  src="/images/portfolio/coming-soon.png"
                  alt="Burger-Logger Thumbnail"
                />
              </a>
            </div>
            {/* end folio-item */}
            <div className="column folio-item">
              <a
                href="https://luuluu75.github.io//Cocktails-Cuisines/"
                id="#modal-06"
                className="folio-item__thumb"
                target="blank"
              >
                <img
                  src="/images/portfolio/coming-soon.png"
                  alt="Cocktails &#38; Cuisines Thumbnail"
                />
              </a>
            </div>
            {/* end folio-item */}

            <div className="column folio-item">
              <a
                href="https://missng-git.github.io/WeatherDash/"
                id="#modal-07"
                className="folio-item__thumb"
                target="blank"
              >
                <img
                  src="/images/portfolio/coming-soon.png"
                  alt="Weather DashThumbnail"
                />
              </a>
            </div>
            {/* end folio-item */}

            <div className="column folio-item">
              <a
                href="#modal-08"
                id="#modal-08"
                className="folio-item__thumb"
                target="blank"
              >
                <img
                  src="/images/portfolio/coming-soon.png"
                  alt="Coming Soon Thumbnail"
                />
              </a>
            </div>
            {/* end folio-item */}
          </div>
          {/* end folio-list */}
        </section>
      </React.Fragment>
    );
  }
}
