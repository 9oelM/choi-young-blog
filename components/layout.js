import React from "react";
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
import SideBar from './slideMenu.js'
import FakeButton from './fixedHeading/fakeButton.js'

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
    <FixedHeadingLayout >
        <SideBar title = "Choi Young"/>
        <Title/>
        <FakeButton/> 
    </FixedHeadingLayout>
    
    <MainContentLayout>
        <MainContent title = {ownerName}>
            {children}
        </MainContent>
    </MainContentLayout>
    </React.Fragment>
)
