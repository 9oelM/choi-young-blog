import Footer from "../components/footer"
import Header from "../components/header"
import Sidebar from "../components/sidebar"

export default ({ children }) => (
    <div id = "layout-container">
    <Sidebar className = "sidebar"/>
    <div id = "main">
    <Header />
        { children }
    <Footer />
    </div>
    
    <style jsx>{`
      #layout-container {
          display: flex;
          flex-direction: row;
      }
      #main{
          width:100%;
          height:100%;
      }
    `}</style>
    </div>
    
)
