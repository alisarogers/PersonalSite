import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import '../AboutPage/About.css'
import { withTheme } from '@material-ui/core/styles';
  

export function Welcome() {
  return (
    <div>
      <Paper className="paperStyle" elevation={1}>
        <Typography variant="display1" color="secondary" component="h3" className="text-center">
          welcome!
        </Typography>
        <Typography component="p" paragraph>
              I'm currently a fourth-year Mathematics-Computer Science student at University of California, San Diego.
          I'll be graduating in June 2019, so I am seeking full-time employment as a Software Engineer for after graduation. 
        </Typography>
        <Typography component="p" paragraph>
            Please click through to learn more about me, my upcoming projects, and check out my resume!
        </Typography>
      </Paper>
    </div>
  );
}


export default withTheme()(Welcome);