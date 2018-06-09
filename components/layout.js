import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Button from "grommet/components/Button";
import Section from "grommet/components/Section";
import Article from "grommet/components/Article";
import Box from "grommet/components/Box";
import Heading from "grommet/components/Heading";
import MenuIcon from "grommet/components/icons/base/Menu";
import FixedHeadingLayout from "./fixedHeading/fixedHeadingLayout.js";
import MainContent from "./mainContent/mainContent.js";
import MainContentLayout from "./mainContent/mainContentLayout.js";
import MenuButton from "./fixedHeading/menuButton.js";
import Title from "./fixedHeading/title.js";
import SideBar from "./slideMenu.js";
import FakeButton from "./fixedHeading/fakeButton.js";

const ownerName = "Choi Young";

export default ({ children }) => (
	<React.Fragment>
		<FixedHeadingLayout >
			<Title/>
		</FixedHeadingLayout>
    
		<MainContentLayout>
			<MainContent title = {ownerName}>
				{children}
			</MainContent>
		</MainContentLayout>
	</React.Fragment>
);
