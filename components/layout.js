import Footer from "../components/footer"
import Header from "../components/header"
import Sidebar from "../components/sidebar"
import Button from "grommet/components/Button"
import Section from "grommet/components/Section"
import Article from 'grommet/components/Article';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading'
import MenuIcon from 'grommet/components/icons/base/Menu';
import FixedHeadingLayout from './fixedHeading/fixedHeadingLayout.js'
import MainContent from './mainContent/mainContent.js'
import MainContentLayout from './mainContent/mainContentLayout.js'
import MenuButton from './fixedHeading/menuButton.js'
import Title from './fixedHeading/title.js'
import Example from './slideMenu.js'

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
    <FixedHeadingLayout>
        <MenuButton/>
        <Title/>
    </FixedHeadingLayout>
    <Example title = "Choi Young"/>
    <MainContentLayout>
        <MainContent title = {ownerName}>
            {children}
        </MainContent>
    </MainContentLayout>
    </React.Fragment>
)
