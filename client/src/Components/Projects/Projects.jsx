import React, { Component } from 'react'
import { SimpleCard } from '../Card'
import Footer from '../Footer/Footer';
import { NavTab } from '../Tab/NavTab'
import { ProjectsList } from './ProjectsList'

export default class Projects extends Component {
    render() {
        return (
            <div>
                <SimpleCard />
                <NavTab tabValue="projects" />
                <ProjectsList />
                
                
            
            </div>
        )
    }
}