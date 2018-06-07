import Box from 'grommet/components/Box'


export default ({children}) => (
<Box style={{position:"fixed", zIndex: "9999"}} responsive = {false}  justify="between" full = "horizontal" colorIndex = "light-1" direction = "row"> 
    {children}
</Box>
)