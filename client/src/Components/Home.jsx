import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css'
import { SimpleCard } from './Card.js'
import { CenteredTabs } from './CenteredTabs.js'

export default class Home extends Component {
    render() {
      return (
        <div>
          <SimpleCard />
          
          <CenteredTabs />
          </div> 
      )
    }
}
