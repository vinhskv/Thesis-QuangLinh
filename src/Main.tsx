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
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import JDARouter from './base/views/jda_router/JDARouter';
import { AddressModule } from './modules/address/Index';
import { CourseModuleModule } from './modules/course_module/Index';
import { EnrolmentModule } from './modules/enrolment/Index';
import { StudentModule } from './modules/student/Index';
import { StudentClassModule } from './modules/student_class/Index';
import { DrawerScreenProps } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export default class MainScreen extends React.Component {
  public render() {
    return (
      <JDARouter homeScreenOptions={{
        title: "Courseman"
      }} routeConfigs={[
        {
          component: StudentClassModule,
          name: 'StudentClass',
          title: 'Student Class'
        },
        {
          component: AddressModule,
          name: 'Address',
        },
        {
          component: CourseModuleModule,
          name: 'CourseModule',
        },
        {
          component: EnrolmentModule,
          name: 'Enrolment',
        },
        {
          component: StudentModule,
          name: 'Student',
        },
      ]} />
    );
  }
}
