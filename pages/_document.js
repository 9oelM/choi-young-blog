import React from "react";
import ReactDOM from "react-dom";
import Document, { Head, Main, NextScript } from 'next/document';
import Grommet from "grommet"

export default class CustomDocument extends Document {
  render() {
    return (
      <html>
        {/* This is going to be your global head */}
        <Head>
        
          
          {/* The stylesheet is compiled to .next/static/style.css. You have to include it into the page using a custom _document.js. The file will be served from /_next/static/style.css*/}
          <link rel="stylesheet" href="/_next/static/style.css" />
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link href="https://fonts.googleapis.com/css?family=Work+Sans:300,400,700" rel="stylesheet"/>
          <script src = {Grommet.grommetux}></script>
        </Head>
        
        <body>
          <Main/> {/* each routed page will go inside here */}
          <NextScript /> {/* You don't have to care about this. */}
          
        </body>
      </html>
    )
  }
}
