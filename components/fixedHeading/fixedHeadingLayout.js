import React from "react";
import Box from 'grommet/components/Box'

export default ({children}) => (
<Box style={{position:"fixed", zIndex: "3"}} 
separator = "bottom" responsive = {false}  
justify="center" full = "horizontal" colorIndex = "light-1" direction = "row" pad = "small"> 
    {children}
</Box>
)