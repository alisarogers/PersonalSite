import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/AboutPage/About';
import Resume from './Components/Resume';
import Projects from './Components/Projects';
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';

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
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/projects" component={Projects} />
        </div>
      </Router>
      </React.Fragment>
    );
  }
}

export default App;
