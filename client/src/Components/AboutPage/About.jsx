import React, { Component } from 'react'
import { SimpleCard } from '../Card'
import {Bio} from './Bio';
import {Skills} from './Skills';
import { NavTab } from '../Tab/NavTab'
import './About.css';

export default class About extends Component {
    render() {
        return (
            <div>
                <SimpleCard />

                <NavTab tabValue="about" />
                <Bio   />
                <Skills />
            </div>
        )
    }
}