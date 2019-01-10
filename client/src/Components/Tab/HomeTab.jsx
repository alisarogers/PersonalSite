import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import Typography from '@material-ui/core/Typography';


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

export class HomeTab extends React.Component {
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
          <Tab value="two" label="About Me" href="/about"/>
          <Tab value="three" label="Projects" href="/projects"  />
          <Tab value="four" label="Resume" href="/resume"/>
          
        </Tabs>
        {this.state.value === 'one' && <TabContainer></TabContainer>}
        {this.state.value === 'two' && <TabContainer></TabContainer>}
        {this.state.value === 'three' && <TabContainer></TabContainer>}
        {this.state.value === 'four' && <TabContainer alignItems="center"></TabContainer>}
      </Paper>
    );
  }
}

HomeTab.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeTab);
