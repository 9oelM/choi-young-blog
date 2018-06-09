import React from "react";
import Header from "grommet/components/Header";
import Title from "grommet/components/Title";
import Box from "grommet/components/Box";

export default ({title}) => (<Header splash={false}
	float={false}
	fixed={false}>
	<Title>
		{title}
	</Title>
	<Box flex={true}
		justify='end'
		direction='row'
		responsive={false}>
	</Box>
</Header>);