import React, { Component } from 'react'
import { SimpleCard } from './Card.js'
import { PaperSheet } from './Paper.js'
import { CenteredTabs } from './CenteredTabs.js'
import { Document, Page } from 'react-pdf'
import { pdfjs } from 'react-pdf';
import useResume from './resume.pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


export default class Resume extends Component {
    render() {
        return (
            <div>
               
                <Document file="useResume" onLoadSuccess={this.onDocumentLoadSuccess}> <Page /> </Document>
            
            </div>
        )
    }
}