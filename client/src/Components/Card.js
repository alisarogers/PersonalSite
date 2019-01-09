import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
    fontSize: 16,
  },
  pos: {
    marginBottom: 12,
  },
};

export function SimpleCard(props) {
  const { classes } = props;
  const bull = <span >•</span>;

  return (
    <Card >
      <CardContent >
        <Typography  color="textSecondary" gutterBottom>
{/*        Word of the Day */}
        </Typography>
        <Typography variant="h5" component="h2"className="text-center" >
          alisabeth
          {bull}
          rogers
        </Typography>
        <Typography  color="textSecondary">
{/*          adjective */}
        </Typography>
        <Typography component="p">
          
  {/*        {'"a benevolent smile"'} */}
        </Typography>
      </CardContent>

    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
