import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Country from "./components/Country"
function App() {
  return (
      <Router>
    <div className="app">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:name" component={Country} />
        </Switch>
    </div>
       </Router>
  );
}

export default App;
