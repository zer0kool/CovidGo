import React, { Component } from "react";
import Mexico from './data/Mexico';


export default () => {


        if ((/^\/country\/Mexico\/MX/).test(window.location.pathname)){
             var callStateData = <Mexico />
         }


        return (
            <>
               {callStateData}
            </>
        );
}
