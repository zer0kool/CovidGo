import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

//CSS
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";

//Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import SideNav from "./components/SideNav/SideNav";


function App() {
  return (
    <Router>
      <header>
        <Header />
        <SideNav />
      </header>
      <main>
        <Route exact path="/" component={Main} />
      </main>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
