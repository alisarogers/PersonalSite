import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import * as ROUTES from '../../constants/routes'

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 0 }}>
      {props.children}
    </Typography>
  );
}


const styles = {
  root: {
    flexGrow: 1,
  },
};

export class NavTab extends React.Component {
  state = {
    value: this.props.tabValue,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
   
    return (
      <Paper >
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          
        <Link to={ROUTES.LANDING} style={{ textDecoration: 'none' }}>
            <Tab value="home" label="Home" />
        </Link>
        <Link to={ROUTES.ABOUT}>
            <Tab value="about" label="About Me" />
        </Link> 
        <Link to={ROUTES.PROJECTS}>
            <Tab value="projects" label="Projects" />
        </Link>  
        <Link to={ROUTES.RESUME}>
            <Tab value="resume" label="Resume" />  
        </Link>
        
          
        </Tabs>
        {this.state.value === 'home' && <TabContainer></TabContainer>}
        {this.state.value === 'about' && <TabContainer></TabContainer>}
        {this.state.value === 'projects' && <TabContainer></TabContainer>}
        {this.state.value === 'resume' && <TabContainer></TabContainer>}
      </Paper>
    );
  }
}

export default withStyles(styles)(NavTab);
