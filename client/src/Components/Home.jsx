import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer/Footer';
import './Home.css'
import { SimpleCard } from './Card'
import { NavTab } from './Tab/NavTab'

export default class Home extends Component {
    render() {
      return (
        <div>
          <SimpleCard />
          
          <NavTab tabValue="home" />

          <Footer />

          </div> 
      )
    }
}
