import React from "react";
import Footer from "../footer";
import Header from "../header";
import Section from "grommet/components/Section";
import Article from "grommet/components/Article";
import Box from "grommet/components/Box";


export default ({children, ownerName}) => (
	<Article full={true} direction = "column" alignContent = "stretch">
		<Header title = {ownerName}/>
		<Section>
			<Box full = {true} align = "center">
				{ children }
			</Box>
		</Section>
		<Footer/>
	</Article>    
);