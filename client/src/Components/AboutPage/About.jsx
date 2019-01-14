import React, { Component } from 'react'
import { Typography } from '@material-ui/core';
import { SimpleCard } from '../Card'
import Footer from '../Footer/Footer';
import Paper from '@material-ui/core/Paper';
import {Bio} from './Bio';
import {FunFacts} from './FunFacts';
import { NavTab } from '../Tab/NavTab'
import './About.css';
import {Spartan} from './Spartan';
import {President} from './President'
export default class About extends Component {
    render() {
        return (
            <div>
                <SimpleCard />

                <NavTab tabValue="about" />
                <Bio   />
                
            </div>
        )
    }
}