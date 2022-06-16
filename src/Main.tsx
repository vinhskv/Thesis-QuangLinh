import * as React from 'react';
import JDADrawer from './base/views/jda_drawer/JDADrawer';
import { StudentClassModule } from './modules/student_class/Index';
import { AddressModule } from './modules/address/Index';
import { CourseModuleModule } from './modules/course_module/Index';
import { EnrolmentModule } from './modules/enrolment/Index';
import { StudentModule } from './modules/student/Index';

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
