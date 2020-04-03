import React, { Component } from "react";

import "./sideNav.css";
export default class SideNav extends Component {
  render() {
    return (
        <div>
            <ul id="slide-out" className="sidenav">
              <li><a href="#!">First Sidebar Link</a></li>
              <li><a href="#!">Second Sidebar Link</a></li>
            </ul>
            <a href="#" data-target="slide-out" className="sidenav-trigger show-on-large"><i className="material-icons">menu</i></a>
        </div>
    );
  }
}

