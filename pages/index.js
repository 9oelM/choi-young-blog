import React from "react";
import Layout from "../components/layout";
import Card from "grommet/components/Card";
import Grommet from "grommet";
import SlideMenu from "../components/slideMenu";
import "../styles/master.sass";

export default () => (
	<Grommet.App centered = {false}>
		<SlideMenu title = {"Choi Young"}/>
		<Layout >
			
		</Layout>
	</Grommet.App>
);