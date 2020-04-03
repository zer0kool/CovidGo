import React, { Component } from "react";

//CSS
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="Header">
          <nav>
    <div className="nav-wrapper blue-grey darken-4">
      <a href="#!" className="brand-logo"><i className="material-icons">healing</i>CovidGo</a>
      <ul className="right hide-on-med-and-down">
        <li><a href="#!"><i className="material-icons">search</i></a></li>
      </ul>
    </div>
  </nav>
      </div>
    );
  }
}
