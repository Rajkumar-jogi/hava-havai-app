import React from 'react';
import { View, Heading, Menu } from '@adobe/react-spectrum';
import { Item } from '@react-spectrum/menu';
import { MdHome } from "react-icons/md";
import { CgMenuGridR } from "react-icons/cg";
import './index.css';

function Sidebar() {
  const sideBarStyle = {
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0.5rem',
    width: '90%', 
    maxWidth: '240px', 
    boxShadow: '4px 0px 8px rgba(0, 0, 0, 0.3)',
    marginRight: '0.2rem'
  };

  const menuStyle = {
    width: '100%', 
  };

  const itemStyle = {
    border: '1px solid red',
    width: '100%', 
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <View UNSAFE_style={sideBarStyle}>
      <View UNSAFE_style={{ width: '100%' }}>
        <Heading level={3}>Navigation</Heading>
        <Menu aria-label='Navigation' UNSAFE_style={menuStyle}>
          <Item UNSAFE_style={itemStyle}>
            <MdHome style={{ marginRight: '0.5rem' }} />
            <span>Home</span>
          </Item>
          <Item UNSAFE_style={itemStyle}>
            <CgMenuGridR style={{ marginRight: '0.5rem' }} />
            <span>Dashboard</span>
          </Item>
        </Menu>
      </View>
      <View UNSAFE_style={{ width: '100%' }}>
        <Heading level={3}>Services</Heading>
        <Menu aria-label='Services' UNSAFE_style={menuStyle}>
          <Item UNSAFE_style={itemStyle}>Airports</Item>
          <Item UNSAFE_style={itemStyle}>Videos</Item>
        </Menu>
      </View>
      <View UNSAFE_style={{ width: '100%' }}>
        <Heading level={3}>Others</Heading>
        <Menu aria-label='Others' UNSAFE_style={menuStyle}>
          <Item UNSAFE_style={itemStyle}>List 1</Item>
          <Item UNSAFE_style={itemStyle}>List 2</Item>
          <Item UNSAFE_style={itemStyle}>List 3</Item>
        </Menu>
      </View>
    </View>
  );
}

export default Sidebar;
