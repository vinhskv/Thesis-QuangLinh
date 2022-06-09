import * as React from 'react';
import JDADrawer from './base/views/jda_drawer/JDADrawer';
import {
  StudentClassModule,
  AddressModule,
  CourseModuleModule,
  EnrolmentModule,
  StudentModule,
} from './modules/Modules';

export default class MainScreen extends React.Component {
  public render() {
    return (
      <JDADrawer
        initialRoute={'StudentClass'}
        routes={[
          {
            component: <StudentClassModule />,
            name: 'StudentClass',
          },
          {
            component: <AddressModule />,
            name: 'Address',
          },
          {
            component: <CourseModuleModule />,
            name: 'CourseModule',
          },
          {
            component: <EnrolmentModule />,
            name: 'Enrolment',
          },
          {
            component: <StudentModule />,
            name: 'Student',
          },
        ]}
      />
    );
  }
}
