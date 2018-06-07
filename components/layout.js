import Footer from "../components/footer"
import Header from "../components/header"
import Sidebar from "../components/sidebar"
import Section from "grommet/components/Section"
import Article from 'grommet/components/Article';
import Box from 'grommet/components/Box';
const ownerName = "Choi Young";
const footerStyles = {
    position: 'fixed',
    bottom: '0',
    display: 'flex',
    justifyContent: 'center',
}

export default ({ children }) => (
    <div>
    <Box full = {true} direction = "row">
    <Sidebar title = {ownerName}/>
    <Article full={true} direction = "column" alignContent = "stretch">
        <Header title = {ownerName}/>
        <Section>
        <Box full = {true}>
            { children }
            </Box>
        </Section>
        <Footer/>
    </Article>
    
    </Box>
    
    </div>
)
