// _document.js
// pages/_document.js
import React from "react";
import ReactDOM from "react-dom";
import Document, { Head, Main, NextScript } from 'next/document';
import "grommet/grommet-dxc.min.css"
import "../static/style.css"

export default class CustomDocument extends Document {
  render() {
    return (
      <html>
        <Head>
        {/* This is going to be your global head */}
          <link rel = "stylesheet" href = "/_next/static/style.css" />
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link href="https://fonts.googleapis.com/css?family=Work+Sans:300,400,700" rel="stylesheet"/>
          <script src = "https://cdnjs.cloudflare.com/ajax/libs/grommet/1.10.1/grommet.min.js"></script>
        </Head>
        
        <body>
          <Main className = "main-wrapper" /> {/* each routed page will go inside here */}
          <style jsx>{`
          #main-wrapper {
            width:100%;
            height:100%;
          }
          `}</style>
          <NextScript /> {/* You don't have to care about this. */}
          
        </body>
      </html>
    )
  }
  
  componentDidMount(){
        const Grommet = require('grommet');
    }
}
