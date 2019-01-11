import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function DownloadButton(props) {
  const { classes } = props;
  return (
    <div>
      <IconButton className={classes.button} aria-label="Download">
        <DeleteIcon />
      </IconButton>
      
      <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
      <label htmlFor="icon-button-file">
        <IconButton color="primary" className={classes.button} component="span">
          <PhotoCamera />
        </IconButton>
      </label>
    </div>
  );
}

DownloadButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DownloadButton);
