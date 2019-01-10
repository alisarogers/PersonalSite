import React, { Component } from 'react'
import github from './images/github.png';
import gmail from './images/gmail.png';
import linkedin from './images/linkedin.png';
import './Footer.css'

export default class Footer extends Component {
    constructor() { 
       super();
    }

    render() {
        return (
            <div className="site-footer">
            <a href="https://github.com/alisarogers"><img alt="Github" className="icon" src={github}/></a>
            <a href="mailto:arogers@ucsd.edu"><img alt="Mail" className="icon" src={gmail}/></a>
            <a href="https://linkedin.com/in/alisabeth-rogers"><img alt="Linkedin" className="icon" src={linkedin}/></a>
    </div>
        )
    }
}

