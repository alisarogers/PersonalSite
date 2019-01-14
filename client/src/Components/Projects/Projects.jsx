import React, { Component } from 'react'
import { SimpleCard } from '../Card'
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