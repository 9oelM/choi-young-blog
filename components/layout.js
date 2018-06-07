import Footer from "../components/footer"
import Header from "../components/header"
import Sidebar from "../components/sidebar"
import Button from "grommet/components/Button"
import Section from "grommet/components/Section"
import Article from 'grommet/components/Article';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading'
import MenuIcon from 'grommet/components/icons/base/Menu';

const ownerName = "Choi Young";
const footerStyles = {
    position: 'fixed',
    bottom: '0',
    display: 'flex',
    justifyContent: 'center',
}
const sideBarStyles = {
    
}

export default ({ children }) => (
    <React.Fragment>
    <Box full = "horizontal" pad = "small" colorIndex = "light-1" direction = "row"> 
        <Box alignSelf = "start"> 
        <Button  style = {{  width: "min-content"}} plain = {false} fill = {false} icon={<MenuIcon size = "medium" colorIndex = "grey-2" pad = "small" />} onClick={f=>f} href='#' ></Button></Box>
    
        <Box alignSelf = "center" align = "center"  full = "horizontal"><Heading style = {{padding: "0", margin: "0"}} tag = "h2" align="center">Choi Young's portfolio</Heading></Box>
    
    </Box>
    <Box full = {true} direction = "row">
    <Sidebar title = {ownerName} style = {sideBarStyles} />
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
    </React.Fragment>
)
