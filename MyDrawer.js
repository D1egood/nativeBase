import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import Nuevo from "./Nuevo";
//import { App } from './App';

export function HomeScreen({ navigation }) {
  return (<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  </View>);
}

export function NotificationsScreen({ navigation }) {
  return (<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    
  </View>);
}


const Drawer = createDrawerNavigator();

export default MyDrawer = () => {
    return (
            <Drawer.navigator>
                <Drawer.Screen />
            </ Drawer.navigator>
    );
};
