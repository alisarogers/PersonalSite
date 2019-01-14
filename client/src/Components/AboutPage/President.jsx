import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Chapter } from './chapter.jpg'
import './About.css'

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

export function President(props) {
  const { classes } = props;
  return (
    <Card className="smallPaperStyle">
      
        <CardMedia
          className="media2"
          image={Chapter}
          title="Chi Chapter"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Phi Sigma Rho
          </Typography>
          <Typography component="p">
          I served as the President of the Chi Chapter of Phi Sigma Rho in 2018. You can read about this leadership experience here.
          </Typography>
        </CardContent>
    </Card>
  );
}

President.propTypes = {

};

export default withStyles(styles)(President);