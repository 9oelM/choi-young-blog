import Box from 'grommet/components/Box'


export default ({children}) => (
<Box responsive = {false}  justify="between" full = "horizontal" pad = "small" colorIndex = "light-1" direction = "row"> 
    {children}
</Box>
)