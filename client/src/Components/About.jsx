import React, { Component } from 'react'
import { SimpleCard } from './Card.js'
import { PaperSheet } from './Paper.js'
import { CenteredTabs } from './CenteredTabs.js'
import { Typography } from '@material-ui/core';

export default class About extends Component {
    render() {
        return (
            <div>
               
                <Typography className="text-center">Hello! I am a fourth-year Mathematics-Computer Science student at University of California, San Diego.</Typography>
            
            </div>
        )
    }
}