import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './About.css'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

export function Bio(props) {
  const { classes } = props;
  const bull = <span >•</span>;
  return (
    <div>
      <Paper className="paperStyle" elevation={1}>
        <Typography variant="display1" color="primary"  component="h3" className="text-center">
          nice to meet you!
        </Typography>
          <Typography component="p" paragraph>
            As a Math-CS student, I have gained programming knowledge and experience as well as a 
          robust understanding of the algorithms and mathematics behind the coding. One of the most rewarding classes
          I took while in undergrad was Design and Analysis of Algorithms, because I deeply enjoy developing
          algorithms and coming up with creative ways to solve new problems. I'm currently teaching myself React (which is
          what I'm using to build this website) in order to get a little exposure to front-end development, as well as working
          through some Machine Learning tutorials from youtube. 
          
    
        </Typography>
      </Paper>
    </div>
  );
}

Bio.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Bio);