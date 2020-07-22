import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import CV from './components/CV/CV';
import ContactMobile from './components/contact/contactMobile';
import Home from './components/home/home';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/cv" component={CV} />
          <Route path="/contact" component={ContactMobile} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
