import React, { Component } from "react";
import { Link } from "react-router-dom"; //COmponente Link para que cuando se le de click a la navegacion este no refresque la pagina

import "./sideNav.css";

export default class SideNav extends Component {
  render() {
    return (
      <div id="slide-out" className="sidenav">
        <div className="navtop">
          <a
            href="#!"
            className="right waves-effect waves-light navbtn sidenav-close"
          >
            close
          </a>
          <h3 className="menutitle">Menu</h3>
        </div>
        <ul className="navList">
          <li className="item">
            <a href="#!" className="menuitem">
              <i className="material-icons white-text">assignment_ind</i>Learn
              about Symptoms
            </a>
          </li>
          <li className="item">
            <a href="#!" className="menuitem">
              <i className="material-icons white-text">cloud</i>Tacking
              Precautions
            </a>
          </li>
          <li className="item">
            <a href="#!" className="menuitem">
              <i className="material-icons white-text">cloud</i>What is Covid-19
            </a>
          </li>
        </ul>

        <div className="row">
          <div className="col s12 m4">
            <div className="card horizontal">
              <div className="card-image">
                <img src="./covidCell.jpg" />
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <p>
                    I am a very simple card. I am good at containing small bits
                    of information.
                  </p>
                </div>
                <div className="card-action">
                  <a href="#">This is a link</a>
                </div>
              </div>
            </div>
          </div>

          <div className="col s12 m4">
            <div className="card horizontal">
              <div className="card-image">
                <img src="../microCovid.png" />
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <p>
                    I am a very simple card. I am good at containing small bits
                    of information.
                  </p>
                </div>
                <div className="card-action">
                  <a href="#">This is a link</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ul className="collapsible">
          <li className="item">
            <div className="collapsible-header menuitem blue-grey darken-4">
              <i className="material-icons">filter_drama</i>About Us
            </div>
            <div className="collapsible-body blue-grey darken-4">
              <span>Lorem ipsum dolor sit amet.</span>
            </div>
          </li>
          <li className="item">
            <div className="collapsible-header menuitem blue-grey darken-4">
              <i className="material-icons">place</i>About CovidGo
            </div>
            <div className="collapsible-body blue-grey darken-4">
              <span>Lorem ipsum dolor sit amet.</span>
            </div>
          </li>
          <li className="item">
            <div className="collapsible-header menuitem blue-grey darken-4">
              <i className="material-icons">whatshot</i>Privacy
            </div>
            <div className="collapsible-body blue-grey darken-4">
              <span>Lorem ipsum dolor sit amet.</span>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
