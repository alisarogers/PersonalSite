import React, { Component } from 'react'
import { Typography } from '@material-ui/core';
import { SimpleCard } from './Card'
import {AboutTab} from './Tab/AboutTab'

export default class About extends Component {
    render() {
        return (
            <div>
                <SimpleCard />

                <AboutTab />
                
                <Typography className="text-center">Hello! I am a fourth-year Mathematics-Computer Science student at University of California, San Diego.</Typography>
            
            </div>
        )
    }
}