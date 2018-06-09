import React from "react";
import Box from 'grommet/components/Box'


export default ({children}) => (
<Box style={{position:"fixed", zIndex: "9999"}} separator = "bottom" responsive = {false}  justify="between" full = "horizontal" colorIndex = "light-1" direction = "row"> 
    {children}
</Box>
)