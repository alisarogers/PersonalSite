import React, { Component } from 'react'
import { SimpleCard } from './Card'
import Footer from './Footer/Footer';
import { NavTab } from './Tab/NavTab'

export default class Projects extends Component {
    render() {
        return (
            <div>
                <SimpleCard />
                <NavTab tabValue="projects" />
                <p> coming soon! </p>
                <Footer />
                
            
            </div>
        )
    }
}