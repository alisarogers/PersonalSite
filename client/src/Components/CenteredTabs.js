import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import Typography from '@material-ui/core/Typography';
import About from './About';
import Resume from './Resume';
import Projects from './Projects';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = {
  root: {
    flexGrow: 1,
  },
};

export class CenteredTabs extends React.Component {
  state = {
    value: "one",
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;

    return (
      <Paper >
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab value="one" label="Home" href="/"/>
          <Tab value="two" label="About Me" />
          <Tab value="three" label="Projects"  />
          <Tab value="four" label="Resume" />
          
        </Tabs>
        {this.state.value === 'one' && <TabContainer>Item One</TabContainer>}
        {this.state.value === 'two' && <TabContainer><About /></TabContainer>}
        {this.state.value === 'three' && <TabContainer><Projects /></TabContainer>}
        {this.state.value === 'four' && <TabContainer><Resume /></TabContainer>}
      </Paper>
    );
  }
}

CenteredTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredTabs);
