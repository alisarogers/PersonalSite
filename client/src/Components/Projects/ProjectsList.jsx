import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Projects.css'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

export function ProjectsList(props) {
  const { classes } = props;
  const bull = <span >•</span>;
  return (
    <div>
      <Paper className="paperStyle" elevation={1}>
        <Typography variant="h6" component="h3">
          
        </Typography>
        <Typography variant="body1">
          You can check out my Github for my past projects - I'll be updating this page as I develop more!
          I'll be attending Rose Hacks at UCR January 19-20, the Webroot Hackathon at UCSD on January 26, and SLO hacks at Cal Poly SLO February 1-3. 
        </Typography>
      </Paper>
    </div>
  );
}

ProjectsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectsList);