import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import JDARouter from './base/views/jda_router/JDARouter';
import { AddressModule } from './modules/address/Index';
import { CourseModuleModule } from './modules/course_module/Index';
import { EnrolmentModule } from './modules/enrolment/Index';
import { StudentModule } from './modules/student/Index';
import { StudentClassModule } from './modules/student_class/Index';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export default class MainScreen extends React.Component {
  public render() {
    return (
      // <Drawer.Navigator>
      //   <Drawer.Screen name='StudentClass'>{(props) => (<StudentClassModule />)}</Drawer.Screen>
      //   <Drawer.Screen name='Address'>{(props) => (<AddressModule />)}</Drawer.Screen>
      // </Drawer.Navigator>
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
