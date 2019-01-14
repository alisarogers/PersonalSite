import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/AboutPage/About';
import Resume from './Components/Resume/Resume';
import Projects from './Components/Projects/Projects';
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';

import CssBaseline from '@material-ui/core/CssBaseline';
import * as ROUTES from './constants/routes';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
      <CssBaseline />
      <Router>
        <div>

        <Route exact path={ROUTES.LANDING} component={Home} /> 
        <Route path={ROUTES.ABOUT} component={About} />
        <Route path={ROUTES.RESUME} component={Resume} />
        <Route path={ROUTES.PROJECTS} component={Projects} />
        </div>
      </Router> 
      </React.Fragment>
    );
  }
}

export default App;
