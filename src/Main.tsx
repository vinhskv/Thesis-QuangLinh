import * as React from 'react';
import JDADrawer from './base/views/jda_drawer/JDADrawer';
import {
  AddressModule,
  StudentModule,
  EnrolmentModule,
  CourseModuleModule,
  StudentClassModule,
} from './modules/Modules';

export default class MainScreen extends React.Component {
  public render() {
    return (
      <JDADrawer
        initialRoute={'Addresses'}
        routes={[
          {
            component: <AddressModule />,
            name: 'Addresses',
          },
          {
            component: <StudentModule />,
            name: 'Students',
          },
          {
            component: <EnrolmentModule />,
            name: 'Enrolments',
          },
          {
            component: <CourseModuleModule />,
            name: 'Courses',
          },
          {
            component: <StudentClassModule />,
            name: 'Classes',
          },
        ]}
      />
    );
  }
}
