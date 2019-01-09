import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 2,
  },
});

export function PaperSheet(props) {
  const { classes } = props;

  return (
    <div>
      <Paper elevation={4}>
        <Typography variant="h5" component="h3" className="text-center"> 
          Alisabeth Rogers
        </Typography>
        <Typography component="p">
          Hello! I am a fourth-year Mathematics-Computer Science student at University of California, San Diego.
        </Typography>
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);
