import React from "react";
import Layout from "../components/layout";
import Grommet from "grommet";
import SlideMenu from "../components/slideMenu";
import Bio from "../components/bio/bio";
import "../styles/master.sass";

export default () => (
	<Grommet.App centered = {false}>
		<SlideMenu title = {"Choi Young"}/>
		<Layout >
			<Bio />
		</Layout>
	</Grommet.App>
);