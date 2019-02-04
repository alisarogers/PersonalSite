import React from 'react';
import { withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import * as ROUTES from '../../constants/routes'
import Grid from '@material-ui/core/Grid';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 0 }}>
      {props.children}
    </Typography>
  );
}

export class NavTab extends React.Component {
  state = {
    value: this.props.tabValue,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
   
    return (
      <Grid container
        justify="center"
        gutterbottom={true}
        spacing={8}>
      <Grid item xs={8}>
      <Paper className="tab" >
        
        <Tabs
          
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor='secondary'
          textColor="primary"
          centered
          className="padding"
          color={"#ce93d8"}
        >
          
        <Link to={ROUTES.LANDING} >
            <Tab value="home" label="Home" textColor="primary" />
        </Link>
        <Link to={ROUTES.ABOUT}>
            <Tab value="about" label="About Me" textColor="primary" />
        </Link> 
        <Link to={ROUTES.PROJECTS}>
            <Tab value="projects" label="Projects" textColor="primary"/>
        </Link>  
        <Link to={ROUTES.RESUME}>
            <Tab value="resume" label="Resume" textColor="primary" />  
        </Link>
        
          
        </Tabs>
       
        {this.state.value === 'home' && <TabContainer></TabContainer>}
        {this.state.value === 'about' && <TabContainer></TabContainer>}
        {this.state.value === 'projects' && <TabContainer></TabContainer>}
        {this.state.value === 'resume' && <TabContainer></TabContainer>}
      </Paper>
      </Grid>
      </Grid>
    );
  }
}

export default withStyles()(NavTab);
