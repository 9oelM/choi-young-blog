import React from "react";
import Box from "grommet/components/Box";
import Button from "grommet/components/Button";
import MenuIcon from "grommet/components/icons/base/Menu";


export default () => (<Box alignSelf = "start"> 
	<Button  style = {{  width: "min-content"}} plain = {false} fill = {false} icon={<MenuIcon size = "medium" colorIndex = "grey-2" pad = "small" />} onClick={f=>f} href='#' style = {{visibility: "hidden"}} ></Button>
</Box>);