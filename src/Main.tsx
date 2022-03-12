import * as React from 'react';
import JDADrawer from './base/views/jda_drawer/JDADrawer';
import {AddressBasicModule} from './modules/addresses';
import {CourseModuleBasicModule} from './modules/course_modules';
import {EnrolmentBasicModule} from './modules/enrolments';
import {StudentModule} from './modules/students';
import {StudentClassBasicModule} from './modules/student_classes';

export default class MainScreen extends React.Component {
  public render() {
    return (
      <JDADrawer
        initialRoute={'Addresses'}
        routes={[
          {
            component: <AddressBasicModule />,
            name: 'Addresses',
          },
          {
            component: <StudentModule />,
            name: 'Students',
          },
          {
            component: <EnrolmentBasicModule />,
            name: 'Enrolments',
          },
          {
            component: <CourseModuleBasicModule />,
            name: 'Course Modules',
          },
          {
            component: <StudentClassBasicModule />,
            name: 'Classes',
          },
        ]}
      />
    );
  }
}
