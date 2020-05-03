import React, { Component } from "react";

export default class ModalContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {

        return (
            <>
               <button className="waves-effect waves-light btn modal-trigger" data-target="viewbystate">View by State</button>
            </>
        );
    }
}
