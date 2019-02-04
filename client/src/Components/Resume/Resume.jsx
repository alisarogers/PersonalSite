import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import { Document, Page } from 'react-pdf'
import { Typography } from '@material-ui/core';
import { pdfjs } from 'react-pdf';
import useResume from './resume.pdf'
import './Resume.css'
import { SimpleCard } from '../Card'
import Paper from '@material-ui/core/Paper';
import { NavTab } from '../Tab/NavTab'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default class Resume extends Component {
    state = {
        numPages: 1,
        pageNumber: 1,
      }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }

    render() {
        const { pageNumber, numPages } = this.state;

        return (
            
            <Grid >
               <SimpleCard />
               
                <NavTab tabValue="resume" />
                <Paper className="paperStyle">
                <Typography variant="display1" color="secondary" className="text-center"> 
                    resume
               </Typography>
               
                <Document className="resume-center" file={useResume} onLoadSuccess={this.onDocumentLoadSuccess}>  
                    <Page renderTextLayer={false} pageNumber={pageNumber} /> 
                
                </Document>
                </Paper>
            </Grid>
        )
    }
}