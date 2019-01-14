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

export function FunFacts(props) {
  const { classes } = props;
  const bull = <span >•</span>;
  return (
    <div>
      <Paper className="smallPaperStyle" elevation={1}>
        <Typography variant="h6" component="h3">
          some fun facts about myself
        </Typography>
        
         
      </Paper>
    </div>
  );
}

FunFacts.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FunFacts);