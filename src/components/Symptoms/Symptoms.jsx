import React from "react";
import "./Symptoms.css";

import { FaHome,FaBriefcaseMedical,FaHeartbeat } from "react-icons/fa";

export default function Symptoms() {
    return (
        <div className="symptoms_container">
            <div className="symptoms_title">
                <h4>Coronavirus (Covid-19) </h4>
            </div>

            <div className="symptoms_grid">
                <div className="symptoms_grid_title grid_item  blue-grey lighten-5 black-text">
                    <span className="text">symptoms</span>
                </div>
                <div className="symptoms_grid_fever grid_item blue darken-4   white-text">
                    Fever
                </div>
                <div className="symptoms_grid_cough grid_item blue lighten-2 white-text">
                    Cough
                </div>
                <div className="symptoms_grid_breath grid_item blue darken-1 white-text">
                    Shortness of breat
                </div>
                <div className="symptoms_grid_time grid_item blue-grey lighten-5 black-text">
                    <p>
                        The symptoms can appear
                        <span className="red-text text-bold"> 2-14 days </span>
                         after you are exposed to the virus cause by COVID-19
                    </p>    
                </div>
                <div className="symptoms_grid_sick grid_item blue-grey lighten-5 black-text">
                    <p>
                        <span className="txt_biggest">
                            IF YOU ARE SICK
                        </span>
                        <br/>
                        <span className="symptoms_grid_sick_bold">
                            Stay home 
                        </span> call a healthcare provider if
                        you some symptoms
                    </p>
                </div>
                <div className="symptoms_grid_img_1 grid_item blue accent-2 white-text">                    
                    <FaHome className="icon_home" />
                    <p>#StayAtHome</p>
                </div>
                <div className="symptoms_grid_medical grid_item light-blue accent-1 black-text">
                    <p>
                        <FaBriefcaseMedical className="icon_medical"/>
                        <span> Please consult your medical provider for any other symptoms that are severe or concerning</span>
                    </p>
                </div>
                <div className="symptoms_grid_link_more grey lighten-5 grid_item  ">
                    
                    <a href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html" target="_blank" rel="noopener noreferrer">
                        More information...
                    </a>
                </div>
                <div className="symptoms_grid_heart grid_item pink accent-2 white-text">
                    <FaHeartbeat className="icon_heart"/>
                </div>
                <div className="symptoms_grid_phrase ">                    
                    <div className="symptoms_phrase_stay yellow-text">Stay Home</div>
                    <div className="symptoms_phrase_actions">
                        Your actions Save Lives
                    </div>
                </div>
            </div>
        </div>
    );
}
