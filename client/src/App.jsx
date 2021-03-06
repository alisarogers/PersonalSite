import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/AboutPage/About';
import Resume from './Components/Resume/Resume';
import Projects from './Components/Projects/Projects';
import 'typeface-roboto';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import * as ROUTES from './constants/routes';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ede7f6',
      light: '#ffc4ff',
      dark: '#9c64a6',
    },
    secondary: {
      main: '#000000',
    },
    overrides: {
      Tabs: {
        background: '#ede7f6',
      }
    }
  },
});

class App extends React.Component {
  render() {
    return (
      <div  >
      <MuiThemeProvider theme={theme} >
      
      <Router>
        <div >

        <Route exact path={ROUTES.LANDING} component={Home} /> 
        <Route path={ROUTES.ABOUT} component={About} />
        <Route path={ROUTES.RESUME} component={Resume} />
        <Route path={ROUTES.PROJECTS} component={Projects} />
        </div>
      </Router> 
      
      
      </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
