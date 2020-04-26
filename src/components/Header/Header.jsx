import React, { Component } from "react";

//CSS
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="Header">
          <nav>
            <div className="nav-wrapper blue-grey darken-4">
              <a href="/" className="left brand-logo">
              <img src="./covidgo.png" className="logo circle"></img>
              CovidGo</a>
              <ul className="right">
                <li><a data-target="right-sidebar-nav" className="sidenav-trigger blue-grey darken-4"><i className="material-icons">add_alert</i></a></li>
              </ul>
            </div>
          </nav>
      </div>
    );
  }
}
