import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';
import {CenteredTabs} from './Components/CenteredTabs.js'
import {PaperSheet} from './Components/Paper.js'
import {SimpleCard} from './Components/Card.js'
import CssBaseline from '@material-ui/core/CssBaseline';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
      <CssBaseline />

      <Router>
        <div>
          <Route exact path="/" component={Home} /> 
          <Route exact path="/about" component={About} />
        </div>
      </Router>
      </React.Fragment>
    );
  }
}

export default App;
