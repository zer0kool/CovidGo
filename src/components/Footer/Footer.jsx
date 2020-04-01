import React, { Component } from "react";

//CSS
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
        <div className="page-footer blue-grey darken-4">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">CovidGo</h5>
                <p className="grey-text text-lighten-4">Built with hope to bring more awareness to communities and make them realize that staying at home can stop this pandemic. #WeAreWavook</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Resources</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!">React</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">MaterializeCSS</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Github</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Heroku</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2020 CovidGo
            <a className="grey-text text-lighten-4 right" href="#!">#StayHome</a>
            </div>
          </div>
        </div>
    );
  }
}
