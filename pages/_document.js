// _document.js
// pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document';
import "grommet/grommet-dxc.min.css"

export default class CustomDocument extends Document {
  render() {
    return (
      <html>
        <Head>
        {/* This is going to be your global head */}
          <link rel = "stylesheet" href = "/_next/static/style.css" />
          <script src = "https://cdnjs.cloudflare.com/ajax/libs/grommet/1.10.1/grommet.min.js"></script>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
        <body>
          <Main id = "main-wrapper" /> {/* each routed page will go inside here */}
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
}
