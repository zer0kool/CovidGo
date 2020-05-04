import React, { Component, lazy, Suspense } from "react";
import "./style/modal.css"

const ModalContainer = lazy(() =>  import ('./bundle/ModalContainer'));


export default class Modal extends Component {
    render() {
        return (
            <div id="viewbystate" className="modal bottom-sheet blue-grey darken-4">
              <Suspense fallback={<div> Loading Component.... </div>}>               <ModalContainer />
              </Suspense>
            </div>
        );
    }


}
