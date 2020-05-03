import React, { Component } from "react";
import ModalContainer from './bundle/ModalContainer';


import "./style/modal.css"

export default class Modal extends Component {


    render() {
        return (
            <div id="viewbystate" className="modal bottom-sheet blue-grey darken-4">
               <ModalContainer />
            </div>
        );
    }


}
