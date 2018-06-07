import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box'

export default () => (<Header splash={false}
  float={false}
  fixed={false}>
  <Title>
    Sample Title
  </Title>
  <Box flex={true}
    justify='end'
    direction='row'
    responsive={false}>
    
  </Box>
</Header>)