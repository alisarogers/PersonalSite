import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { ImageAvatars } from './Avatar';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


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
          <Typography className="background" variant="h5" component="h2" className="text-center"  >
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

  //   <Grid item  >
  //   <Card color="#ede7f6" className="background">
  //   <ImageAvatars xs={4}  />
  //     <CardContent xs={8} color="#ede7f6" className="background" >
  //       <Typography className="background" variant="h5" component="h2"className="text-center"  >
  //         alisabeth
  //         {bull}
  //         rogers
  //       </Typography>
  //     </CardContent>
      
  //   </Card>
  
  //   </Grid>
  // );
}

SimpleCard.propTypes = {
  
};

export default withStyles(styles)(SimpleCard);
