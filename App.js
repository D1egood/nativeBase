import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Button} from "react-native";
import { MyDrawer } from './MyDrawer';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>);
}