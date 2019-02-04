import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './About.css'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

export function Skills(props) {

  return (
    <div>
      
        <Grid container 
            spacing={8} justify="center">
          <Grid item xs={4}>
          <Paper elevation={1}>
            <Typography variant="headline" align="center" >
            programming languages
            </Typography>
            <Typography component="p">

            <List align="left" dense="true" >
                    
                      <ListItem>
                        <ListItemText
                          primary="Most experience with Java, C++, Javascript"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Some experience with Python, Matlab, C"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Currently learning React, Node"
                        />
                      </ListItem>
                    
                  </List>
              
        
            </Typography>
          </Paper>
          </Grid>
          <Grid item xs={4}>
          <Paper  elevation={1}>
              <Typography variant="headline" align="center">
                relevant coursework
                </Typography>
                <Typography component="p">

                <List align="left" dense >
                        
                          <ListItem>
                            <ListItemText
                              primary="Advanced Data Structures"
                            />
                          </ListItem>
                          <ListItem>
                            <ListItemText
                              primary="Design and Analysis of Algorithms"
                            />
                          </ListItem>
                          <ListItem>
                            <ListItemText
                              primary="Software Engineering"
                            />
                          </ListItem>
                        
                      </List>
                  
            
                </Typography>
                </Paper>
          </Grid>

        </Grid>
      
    </div>
  );
}

Skills.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Skills);