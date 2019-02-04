import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { ImageAvatars } from './Avatar';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


import './Card.css'
const styles = {
  card: {
    minWidth: 275,
    maxWidth: 400,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 18,
  },
  pos: {
    marginBottom: 12,
  },
  root: {
    flexGrow: 1,
   },
   grow: {
     flexGrow: 1,
   },
   menuButton: {
     marginLeft: -12,
     marginRight: 20,
   },
};

export function SimpleCard(props) {
  
  const bull = <span >•</span>;

  return (
    <div >
      <Grid container
        direction="column">
      
      <AppBar position="static">
        <Toolbar>
        <Grid item xs={4}>
        <ImageAvatars xs={4}  />
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h5" component="h2" className="text-center"  >
          alisabeth
          {bull}
          rogers
        </Typography>
        </Grid>
        </Toolbar>
      </AppBar>
      
      </Grid>
    </div>
  );

}

SimpleCard.propTypes = {
  
};

export default withStyles(styles)(SimpleCard);
