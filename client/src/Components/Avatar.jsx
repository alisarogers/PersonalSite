import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const styles = {
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
};

export function ImageAvatars(props) {
  const { classes } = props;
  return (
    <Grid container justify="center" alignItems="right">
      <Avatar alt="Alisabeth Rogers" src="https://previews.dropbox.com/p/thumb/AASWwpMeLhFVs__gbYEa5NORTpN7hwXgFybsVIy47HZCvFE-JtFQQqXWyNUQd7WK5uCUMKtPotQGTr-kpKHjZz2JuXYf-PQ_92XWWHCaFk__vsyN_xqm9sIdRRlHlZbbW05iRTN0OpqTUrtfyBLSFKwvR4UE8DPmDbYAyISpmIRFMfjjVN04ULSQWkESYvRWRRGm46H2U9kqxyunKBukGgolTR2OC0dVPs6mZKME_OgMQg/p.jpeg?size=1280x960&size_mode=3" className={styles.bigAvatar} />
    </Grid>
  );
}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatars);