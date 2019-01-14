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
import './About.css'
import Image from 'material-ui-image'

const styles = {
  card: {
    maxWidth:345,
  },
  media: {
    height: 200,
    width: "auto",
  },
  
  
};

export function Spartan(props) {
  const { classes } = props;
  return (
    <Card className="smallPaperStyle" >
         <CardMedia>
          
        </CardMedia>
        <CardContent>
        <Image 
         src="https://previews.dropbox.com/p/thumb/AAS51z0a7qNxR-qFn-hHUxxDsqWVO163viVE2XT6jXVofeD9MSSBOz7LtLdLvlLFCE6rWo0kbuLLkAkj0_pUodEgRziY4_ZbjtUBPXoZMGF-e1jmjbGVoq_Tp2VeL76T8Ye9fxzNZnHXYT91pnvF6TedXXeYISoQlJmNinAOXZ2qL3rB86E_bSyFumvpf9Sxg-S3rKV23Zal488YAn6iJNqZ9wXTIPD4TmupzLsL9bHDlw/p.jpeg?size=1280x960&size_mode=3"
         imageStyle={styles.media}
         />
          <Typography gutterBottom variant="h5" component="h2">
            Spartan Race
          </Typography>
          <Typography component="p">
          I completed my Spartan Trifecta in 2018! That's 24.3 miles of running, 82 obstacles, and 5,190 feet of climbing.
          </Typography>
        </CardContent>
    </Card>
  );
}

Spartan.propTypes = {

};

export default withStyles(styles)(Spartan);