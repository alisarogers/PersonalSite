import React, { Component } from 'react'
import { SimpleCard } from './Card'

import { ProjectsTab } from './Tab/ProjectsTab'

export default class Projects extends Component {
    render() {
        return (
            <div>
                <SimpleCard />
                <ProjectsTab />
                <p> coming soon! </p>
                
            
            </div>
        )
    }
}