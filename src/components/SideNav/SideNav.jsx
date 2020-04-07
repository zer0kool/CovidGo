import React, { Component } from "react";
import { Link } from "react-router-dom"; //COmponente Link para que cuando se le de click a la navegacion este no refresque la pagina

import "./sideNav.css";
export default class SideNav extends Component {
    render() {
        return (
            <div>
                <ul id="slide-out" className="sidenav">
                    <Link className="navbar-brand" to="/">
                        Notes
                    </Link>
                    <li>
                        <Link className="navbar-brand" to="/#!">
                            Link1
                        </Link>
                    </li>
                    <li>
                        <Link className="navbar-brand" to="/#!">
                            link2
                        </Link>
                    </li>
                </ul>
                <Link
                    data-target="slide-out"
                    className="sidenav-trigger show-on-large"
                    to="/#!"
                >
                    <i className="material-icons">menu</i>
                </Link>
            </div>
        );
    }
}
