import React, { Component } from 'react'
import { SimpleCard } from './Card.js'
import { PaperSheet } from './Paper.js'
import { CenteredTabs } from './CenteredTabs.js'
import { Document, Page } from 'react-pdf'
import { pdfjs } from 'react-pdf';
import useResume from './resume.pdf'
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
            <div>
               
                <Document file={useResume} onLoadSuccess={this.onDocumentLoadSuccess}>  <Page pageNumber={pageNumber} /> 
                
                </Document>
            
            </div>
        )
    }
}