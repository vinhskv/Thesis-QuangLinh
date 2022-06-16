<<<<<<< HEAD
import {createDrawerNavigator} from '@react-navigation/drawer';
import * as React from 'react';
import JDADrawer from './base/views/jda_drawer/JDADrawer';
import {AddressModule} from './modules/address/Index';
import {CourseModuleModule} from './modules/course_module/Index';
import {EnrolmentModule} from './modules/enrolment/Index';
import {StudentModule} from './modules/student/Index';
import {StudentClassModule} from './modules/student_class/Index';
import {DrawerScreenProps} from '@react-navigation/drawer';
=======
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';
import JDADrawer from './base/views/jda_drawer/JDADrawer';
import { AddressModule } from './modules/address/Index';
import { CourseModuleModule } from './modules/course_module/Index';
import { EnrolmentModule } from './modules/enrolment/Index';
import { StudentModule } from './modules/student/Index';
import { StudentClassModule } from './modules/student_class/Index';
import { DrawerScreenProps } from '@react-navigation/drawer';
>>>>>>> 69e6f8cb2ca34dbb86fc1cd2d167482142b389bc

const Drawer = createDrawerNavigator();

export default class MainScreen extends React.Component {
  public render() {
    return (
      <Drawer.Navigator>
<<<<<<< HEAD
        <Drawer.Screen name="StudentClass">
          {props => <StudentClassModule />}
        </Drawer.Screen>
        <Drawer.Screen name="Address">
          {props => <AddressModule />}
        </Drawer.Screen>
=======
        <Drawer.Screen name='StudentClass'>{(props) => (<StudentClassModule />)}</Drawer.Screen>
        <Drawer.Screen name='Address'>{(props) => (<AddressModule />)}</Drawer.Screen>
>>>>>>> 69e6f8cb2ca34dbb86fc1cd2d167482142b389bc
      </Drawer.Navigator>
      // <JDADrawer
      //   initialRoute={'StudentClass'}
      //   routes={[
      //     {
      //       component: <StudentClassModule />,
      //       name: 'StudentClass',
      //     },
      //     {
      //       component: <AddressModule />,
      //       name: 'Address',
      //     },
      //     {
      //       component: <CourseModuleModule />,
      //       name: 'CourseModule',
      //     },
      //     {
      //       component: <EnrolmentModule />,
      //       name: 'Enrolment',
      //     },
      //     {
      //       component: <StudentModule />,
      //       name: 'Student',
      //     },
      //   ]}
      // />
    );
  }
}
