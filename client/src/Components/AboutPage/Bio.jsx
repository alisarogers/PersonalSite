import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './About.css'
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

export function Bio(props) {
  return (
    <div>
      <Grid container spacing={0} justify="center" alignItems="center"
        >
        <Grid item xs={8}>
      <Paper elevation={1}>
        <Typography variant="display1" color="secondary"  component="h3"
          gutterbottom="true"
          align="center" >
          nice to meet you!
        </Typography>
          <Typography variant="body1" paragraph gutterbottom={true}>
            As a Math-CS student, I have gained programming knowledge and experience as well as a 
          robust understanding of the algorithms and mathematics behind the coding. One of the most rewarding classes
          I took while in undergrad was Design and Analysis of Algorithms, because I deeply enjoy developing
          algorithms and coming up with creative ways to solve new problems. I'm currently teaching myself React (which is
          what I'm using to build this website) in order to get a little exposure to front-end development, as well as working
          through some Machine Learning tutorials from youtube. I'm also participating in several hackathons this quarter to meet
          other programmers and learn some new technologies.
          
    
        </Typography>
      </Paper>
      </Grid>
    </Grid>
    </div>
  );
}

Bio.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Bio);