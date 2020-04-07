import React, { Component } from "react";

import "./sideNav.css";

export default class SideNav extends Component {
  render() {
    return (
        <div id="slide-out" className="sidenav">
           <div className="navtop">
             <a href="#!" ClassName="right waves-effect waves-light navbtn sidenav-close">close</a>
             <h3 className="menutitle">Menu</h3>
           </div>
            <ul className="navList">
              <li className="item">
                  <a href="#!" className="menuitem"><i className="material-icons white-text">assignment_ind</i>Learn about Symptoms</a>
              </li>
              <li className="item">
                  <a href="#!" className="menuitem"><i className="material-icons white-text">cloud</i>Tacking Precautions</a>
              </li>
              <li className="item">
                  <a href="#!" className="menuitem"><i className="material-icons white-text">cloud</i>What is Covid-19</a>
            </li>
            </ul>

            <div className="row">
              <div ClassName="col s12 m4">
                <div ClassName="card horizontal">
                  <div ClassName="card-image">
                    <img src="./covidCell.jpg" />
                  </div>
                  <div ClassName="card-stacked">
                    <div ClassName="card-content">
                      <p>I am a very simple card. I am good at containing small bits of information.</p>
                    </div>
                    <div ClassName="card-action">
                      <a href="#">This is a link</a>
                    </div>
                  </div>
                </div>
              </div>

             <div ClassName="col s12 m4">
                <div ClassName="card horizontal">
                  <div ClassName="card-image">
                    <img src="../microCovid.png" />
                  </div>
                  <div ClassName="card-stacked">
                    <div ClassName="card-content">
                      <p>I am a very simple card. I am good at containing small bits of information.</p>
                    </div>
                    <div ClassName="card-action">
                      <a href="#">This is a link</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <ul ClassName="collapsible">
            <li ClassName="item">
              <div ClassName="collapsible-header menuitem blue-grey darken-4"><i ClassName="material-icons">filter_drama</i>About Us</div>
              <div ClassName="collapsible-body blue-grey darken-4"><span>Lorem ipsum dolor sit amet.</span></div>
            </li>
            <li ClassName="item">
              <div ClassName="collapsible-header menuitem blue-grey darken-4"><i ClassName="material-icons">place</i>About CovidGo</div>
              <div ClassName="collapsible-body blue-grey darken-4"><span>Lorem ipsum dolor sit amet.</span></div>
            </li>
            <li ClassName="item">
              <div ClassName="collapsible-header menuitem blue-grey darken-4"><i ClassName="material-icons">whatshot</i>Privacy</div>
              <div ClassName="collapsible-body blue-grey darken-4"><span>Lorem ipsum dolor sit amet.</span></div>
            </li>
          </ul>

        </div>
    );
  }
}

