import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Projects.css'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

export function ProjectsList(props) {
  const { classes } = props;
  const bull = <span >•</span>;
  return (
    <div>
      <Paper className="paperStyle" elevation={1}>
        <Typography variant="display1" color="primary" component="h3">
          upcoming projects/hackathons
        </Typography>
        <Typography variant="body1">
          Rose Hack @ UCR - January 19-20
          <br />
          Webroot Hackathon @ UCSD - January 26
          <br />
          SLO Hacks @ Cal Poly SLO - February 1-3
          <br />
          RPG Chat App (in development) - messaging app that will allow one user to have multiple aliases and
          duplicate copies of groups with different threads
        </Typography>

        <Typography variant="display1" color="primary" component="h3">
          past projects
        </Typography>

        <Typography  variant="h6" href="https://github.com/alisarogers/binarySearchTree">
          ROOMI 
        </Typography>
        <Typography variant="caption">
        Project Manager - Fall 2018
        </Typography>
        <Typography variant="body1">
        created a web app designed to help roommates coordinate household chores, parking schedules, and grocery lists.
        </Typography>

        <Typography  variant="h6" href="https://github.com/alisarogers/binarySearchTree">
        Pathfinder/six degrees of separation
        </Typography>
        <Typography variant="caption">
        april 2018
        </Typography>
        <Typography variant="body1">
        utilized dijkstra's algorithm to implement a program that, given any two actors, can find a path that connects
        them in as few steps as possible
        </Typography>

        <Typography  variant="h6" href="https://github.com/alisarogers/binarySearchTree">
          dictionary tries
        </Typography>
        <Typography variant="caption">
        april 2018
        </Typography>
        <Typography variant="body1">
        implemented an auto-complete and spell-check function using ternary tries
        </Typography>

        <Typography variant="h6" href="https://github.com/alisarogers/huffmanTree">
          huffman tree
        </Typography>
        <Typography variant="caption">
        may 2018
        </Typography>
        <Typography variant="body1">
        file compression using huffman encoding, written in c++
        </Typography>

        <Typography variant="h6" href="https://github.com/alisarogers/binarySearchTree">
          binary search tree
        </Typography>
        <Typography variant="caption">
        april 2018
        </Typography>
        <Typography variant="body1">
        implemented a binary search tree using C++
        </Typography>

        
 
      </Paper>
    </div>
  );
}

ProjectsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectsList);