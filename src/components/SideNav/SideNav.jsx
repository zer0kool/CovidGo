import React, { Component } from "react";
import { Link } from "react-router-dom";

import SymptomsChart from "../SymptomsChart/SymptomsChart"
import Wavook from "../Wavook/Wavook"

import "./SideNav.css";

export default class SideNav extends Component {
  render() {
    return (
        <div id="slide-out" className="sidenav">
           <div className="navtop">
             <a className="right waves-effect waves-light navbtn sidenav-close">close</a>
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
                    <i className="material-icons white-text">nature_people</i>Tacking Precautions
                  </Link>
              </li>
              <li className="item">
                  <Link className="menuitem sidenav-close" to="/whatIsCOVID19">
                    <i className="material-icons white-text">bug_report</i>What is Covid-19
                  </Link>
            </li>
            </ul>

            <div className="row">
              <div className="col s12 m6">
                    <Wavook />
              </div>

             <div className="col s12 m6">
                <div className="card horizontal">
                  <div className="card-image">
                    <img src="./microCovid.png" />
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
              <div className="collapsible-header menuitem blue-grey darken-4"><i className="material-icons">face</i>About Us</div>
              <div className="collapsible-body blue-grey darken-4">
                  <span>We are software engineers passionate about discovering and learning new skills. Either by creating tools for the community or by participating in hackathons to challange our creativity.</span>
                  <br></br>
                  <div className="chip">
                        <img src="wavook.png" alt="Contact Person" />
                        Ulises Cervantes
                    </div>
                    <div className="chip">
                        <img src="wavook.png" alt="Contact Person" />
                        Alejandro Loaiza
                    </div>
              </div>
            </li>
            <li className="item">
              <div className="collapsible-header menuitem blue-grey darken-4"><i className="material-icons">developer_mode</i>About CovidGo</div>
              <div className="collapsible-body blue-grey darken-4">
                  <span className="covidgo"><b>GovidGO</b> Was created to bring awareness to communities. We collect information from different sources to build this application and make it easy for you to visualise.</span>
                  <span>
                      For the <b>Nerds</b>, this application was created using <a href="https://reactjs.org/">React</a>. For the front-end we used <a href="http://materializecss.com/">Materialize CSS</a> to help boost the productivity in the UI/UX design.
                  </span>
              </div>
            </li>
            <li className="item">
              <div className="collapsible-header menuitem blue-grey darken-4"><i className="material-icons">cloud</i>DATA Resources</div>
              <div className="collapsible-body blue-grey darken-4">
                  <span>Let's talk about the collection of data in the conponents.</span>

                  </div>
            </li>
          </ul>
            <SymptomsChart />
        </div>
    );
  }
}

