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
      <Paper className="center" elevation={1}>
        <Typography variant="h6" component="h3">
          hello!
        </Typography>
        <Typography component="p">
          I'm currently a fourth-year Mathematics-Computer Science student at University of California, San Diego. 
        </Typography>
      </Paper>
    </div>
  );
}

Bio.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Bio);