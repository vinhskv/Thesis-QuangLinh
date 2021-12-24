import {
  createDrawerNavigator,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import React, {ComponentType} from 'react';

export interface IJDADrawerControllerProps {
  initialRoute: string;
  routes: {
    name: string;
    component: ComponentType;
  }[];
  drawerProps: DrawerContentComponentProps;
}
const Drawer = createDrawerNavigator();

export function withDrawerController<T extends IJDADrawerControllerProps>(
  Component: ComponentType<T>,
) {
  return (props: Omit<T, 'drawerProps'>) => {
    return (
      <Drawer.Navigator
        initialRouteName={props.initialRoute}
        drawerContent={drawer_props => (
          <Component {...(props as T)} drawerProps={drawer_props} />
        )}>
        {props.routes.map((route, index) => (
          <Drawer.Screen
            key={route.name + index}
            name={route.name}
            component={route.component}
          />
        ))}
      </Drawer.Navigator>
    );
  };
}
