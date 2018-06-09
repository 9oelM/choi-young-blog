import React from "react";
import { slide as SlideMenu } from 'react-burger-menu'
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';
import MenuButton from './fixedHeading/menuButton.js'

class SideBar extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
      const title = this.props.title;
    return (
      <SlideMenu >
        <Header pad='medium'
    justify='between' size='small'>
    <Title>
      {title}
    </Title>
  </Header>
  <Box flex='grow'
    justify='start'>
    <Menu primary={true}>
      <Anchor href='#'
        className='active'>
        First
      </Anchor>
      <Anchor href='#'>
        Second
      </Anchor>
      <Anchor href='#'>
        Third
      </Anchor>
    </Menu>
  </Box>
  <Footer pad='medium'>
  </Footer>
      </SlideMenu>
    );
  }
}

export default SideBar;