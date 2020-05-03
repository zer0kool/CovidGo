import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

//CSS
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";

//Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import CountryData from './components/CountryData/CountryData'
import Notfound from "./components/Notfound/Notfound";
import SideNav from "./components/SideNav/SideNav";
import WhatIsCovid from "./components/WhatIsCovid/WhatIsCovid"
import Precautions from './components/Precautions/Precautions'
import Symptoms from './components/Symptoms/Symptoms'
import Feed from './components/Feed/Feed'
import Modal from "./components/Modal/Modal";

function App() {
    return (
        <Router>
            <header>
                <Header />
                <SideNav />
                <Feed />
            </header>
            <main>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/symptoms" component={Symptoms} />
                    <Route exact path="/precautions" component={Precautions} />
                    <Route exact path="/whatIsCOVID19" component={WhatIsCovid} />
                    <Route exact path="/country/:name/:code" component={CountryData} />
                    <Route component={Notfound} />
                </Switch>
            </main>

            <Modal />

            <div  data-target="slide-out" className="right fixed-action-btn sidenav-trigger btn-large btn-floating waves-effect waves-light red"><i className="material-icons">menu</i></div>
            <Footer />
        </Router>
    );
}

export default App;
