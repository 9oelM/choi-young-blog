import Footer from 'grommet/components/Footer';
import Copyright from "./copyright.js";
import Paragraph from 'grommet/components/Paragraph';
import Box from 'grommet/components/Box';

export default () => (
<Footer justify='between'
  size='medium'>
  <Box direction='row'
    align='center'
    pad={{"between": "medium"}}>
    <Paragraph margin='none'>
      <Copyright />
    </Paragraph>
  </Box>
</Footer>)