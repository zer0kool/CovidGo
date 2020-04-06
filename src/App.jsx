import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

//CSS
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";

//Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Notfound from "./components/Notfound/Notfound";
import TopStats from "./components/TopStats/TopStats";
import SideNav from "./components/SideNav/SideNav";

function App() {
    return (
        <Router>
            <header>
                <Header />
                <SideNav />
            </header>
            <main>
                <TopStats />
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route component={Notfound} />
                </Switch>
            </main>
            <Footer />
        </Router>
    );
}

export default App;