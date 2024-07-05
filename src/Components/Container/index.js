import React from 'react';
import { View } from '@react-spectrum/view';
import Sidebar from '../Sidebar';
import Dashboard from '../Dashboard';
import './index.css';
import { Flex } from '@adobe/react-spectrum';

function Container() {
  const customStyles = {
    padding: '2px 20px 20px 20px'
  }
  
  return (
    <View height='calc(100vh - 40px)'>
      <Flex direction='row' UNSAFE_style={customStyles}>
        <Sidebar />
        <Dashboard />
      </Flex>
    </View>
  );
}

export default Container;
