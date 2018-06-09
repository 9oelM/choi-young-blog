import React from "react";
import Footer from "grommet/components/Footer";
import Copyright from "./copyright.js";
import Paragraph from "grommet/components/Paragraph";
import Box from "grommet/components/Box";


export default () => (
	<Footer
		size='medium' alignSelf = "end" align="center" alignContent = "center" justify = "center" textAlign = "center" pad = "large" separator = "top" >
		<Box direction='row'
			align='center'
			pad={{"between": "medium"}}>
			<Paragraph margin='none'>
				<Copyright />
			</Paragraph>
		</Box>
	</Footer>);