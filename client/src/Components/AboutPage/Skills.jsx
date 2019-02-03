import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './About.css'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

export function Skills(props) {
  const { classes } = props;
  const bull = <span >•</span>;
  return (
    <div>
      <Paper className="paperStyle" elevation={1}>
        <Typography variant="display1" color="primary"  component="h3" className="text-center" >
          skills
        </Typography>
        <Typography variant="headline" >
        programming languages
        </Typography>
        <Typography component="p">
        <List align="left" >
                
                  <ListItem>
                    <ListItemText
                      primary="Single-line item"
                      
                    />
                  </ListItem>
                
              </List>
          
    
        </Typography>
      </Paper>
    </div>
  );
}

Skills.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Skills);