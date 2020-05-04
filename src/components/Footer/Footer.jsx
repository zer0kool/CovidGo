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
                            <p className="grey-text text-lighten-4">
                                Built with hope to bring more awareness to
                                communities and make them realize that staying
                                at home can stop this pandemic. #StayHome
                            </p>
                        </div>
                        <div className="col l4 offset-l2 s12">
                            <h5 className="white-text">Resources</h5>
                            <ul className="footerLi">
                                <li>
                                    <a
                                        className="grey-text text-lighten-3"
                                        href="https://sinave.gob.mx"
                                    >
                                        gob.mx
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="grey-text text-lighten-3"
                                        href="https://www.who.int/"
                                    >
                                        who.int
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="grey-text text-lighten-3"
                                        href="https://www.worldometers.info/coronavirus/"
                                    >
                                        worldometers
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="grey-text text-lighten-3"
                                        href="https://www.wavook.com"
                                    >
                                        Wavook
                                    </a>
                                </li>
                            </ul>
                            <div className="Build blue-grey darken-4">
                             <h5 className="white-text">Build By Wavook</h5>
                              <div className="chip">
                                  <img decoding="async" loading="lazy" src="wavook.png" alt="Contact Person" />
                                Ulises Cervantes
                              </div>
                               <div className="chip">
                                   <img decoding="async" loading="lazy" src="wavook.png" alt="Contact Person" />
                                Alejandro Loaiza
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        © 2020 CovidGo
                        <a className="grey-text text-lighten-4 right" href="#!">
                            #WeAreWavook
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
