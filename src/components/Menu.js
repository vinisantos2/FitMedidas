import React from 'react';
import { useState } from 'react';
import { View, Text } from 'react-native';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import ButtonLogout from './ButtonLogout';
import { BRANCO } from '../constants/Cores';

export default function MenuComponent() {
  const [visible, setVisible] = useState(false);

  const hideMenu = () => setVisible(false);

  const showMenu = () => setVisible(true);

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Menu
        visible={visible}
        anchor={<Text style={{color: BRANCO}}  onPress={showMenu}>Show menu</Text>}
        onRequestClose={hideMenu}
      >
        <MenuItem onPress={hideMenu}>Menu item 1</MenuItem>
        <MenuItem onPress={hideMenu}>Menu item 2</MenuItem>
        <MenuItem disabled>Disabled item</MenuItem>
        <MenuDivider />
        <MenuItem onPress={hideMenu}><ButtonLogout /></MenuItem>
      </Menu>
    </View>
  );
}