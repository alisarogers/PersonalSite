import React, { Component } from 'react'
import { SimpleCard } from '../Card'
import { NavTab } from '../Tab/NavTab'
import { Welcome } from './Welcome'

export default class Home extends Component {
    render() {
      return (
        <div>
          <SimpleCard />
          
          <NavTab tabValue="home" />

          <Welcome />

          </div> 
      )
    }
}
