import React, { Component } from "react";
import { Link } from "react-router-dom";

import SymptomsChart from "../SymptomsChart/SymptomsChart"

import "./SideNav.css";

export default class SideNav extends Component {
  render() {
    return (
        <div id="slide-out" className="sidenav">
           <div className="navtop">
             <a  className="right waves-effect waves-light navbtn sidenav-close">close</a>
             <h3 className="menutitle">Menu</h3>
           </div>
            <ul className="navList">
              <li className="item">                  
                  <Link className="menuitem sidenav-close" to="/symptoms">
                    <i className="material-icons white-text">assignment_ind</i>Learn about Symptoms
                  </Link>
              </li>
              <li className="item">
                  <Link className="menuitem sidenav-close" to="/precautions">
                    <i className="material-icons white-text">cloud</i>Tacking Precautions
                  </Link>
              </li>
              <li className="item">                  
                  <Link className="menuitem sidenav-close" to="/whatIsCOVID19">
                    <i className="material-icons white-text">cloud</i>What is Covid-19
                  </Link>
            </li>
            </ul>
            <SymptomsChart />
            <div className="row">
              <div className="col s12 m4">
                <div className="card horizontal">
                  <div className="card-image">
                    <img src="./covidCell.jpg" />
                  </div>
                  <div className="card-stacked">
                    <div className="card-content">
                      <p> This Q&A will be updated as more is known about COVID-19, how it spreads and how it is affecting people worldwide.</p>
                    </div>
                    <div className="card-action">
                      <a href="https://www.who.int/news-room/q-a-detail/q-a-coronaviruses">www.who.int</a>
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
                      <p>"Solidarity” is an international clinical trial to help find an effective treatment for COVID-19, launched by the World Health Organization and partners.</p>
                    </div>
                    <div className="card-action">
                      <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/global-research-on-novel-coronavirus-2019-ncov/solidarity-clinical-trial-for-covid-19-treatments">www.who.int</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <ul className="collapsible">
            <li className="item">
              <div className="collapsible-header menuitem blue-grey darken-4"><i className="material-icons">filter_drama</i>About Us</div>
              <div className="collapsible-body blue-grey darken-4"><span>Lorem ipsum dolor sit amet.</span></div>
            </li>
            <li className="item">
              <div className="collapsible-header menuitem blue-grey darken-4"><i className="material-icons">place</i>About CovidGo</div>
              <div className="collapsible-body blue-grey darken-4"><span>Lorem ipsum dolor sit amet.</span></div>
            </li>
            <li className="item">
              <div className="collapsible-header menuitem blue-grey darken-4"><i className="material-icons">whatshot</i>DATA Resources</div>
              <div className="collapsible-body blue-grey darken-4"><span>Lorem ipsum dolor sit amet.</span></div>
            </li>
          </ul>

        </div>
    );
  }
}

