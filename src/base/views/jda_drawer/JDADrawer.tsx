import {
  DrawerContentScrollView,
  DrawerItemList
} from '@react-navigation/drawer';
import * as React from 'react';
import {
  IJDADrawerControllerProps,
  withDrawerController
} from '../../controlers/jda_drawer_controlers/withDrawerController';

export interface IJDADrawerProps extends IJDADrawerControllerProps {}

function JDADrawer(props: IJDADrawerProps) {
  return (
    <DrawerContentScrollView {...props.drawerProps}>
      <DrawerItemList {...props.drawerProps} />
    </DrawerContentScrollView>
  );
}

export default withDrawerController(JDADrawer);
