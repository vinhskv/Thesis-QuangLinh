import * as React from 'react';
import JDADrawer from './base/views/jda_drawer/JDADrawer';
import {AddressModuleName} from './data_types/Address';
import {CourseModuleModuleName} from './data_types/CourseModule/CourseModule';
import {EnrolmentModuleName} from './data_types/Enrolment';
import {StudentModuleName} from './data_types/Student';
import {StudentClassModuleName} from './data_types/StudentClass';
import {AddressBasicModule} from './modules/addresses';
import {CourseModuleBasicModule} from './modules/course_modules';
import {EnrolmentBasicModule} from './modules/enrolments';
import {StudentModule} from './modules/students';
import {StudentClassBasicModule} from './modules/student_classes';

export default class MainScreen extends React.Component {
  public render() {
    return (
      <JDADrawer
        initialRoute={AddressModuleName}
        routes={[
          {
            component: <AddressBasicModule moduleName={AddressModuleName} />,
            name: AddressModuleName,
          },
          {
            component: <StudentModule moduleName={StudentModuleName} />,
            name: StudentModuleName,
          },
          {
            component: (
              <EnrolmentBasicModule moduleName={EnrolmentModuleName} />
            ),
            name: EnrolmentModuleName,
          },
          {
            component: (
              <CourseModuleBasicModule moduleName={CourseModuleModuleName} />
            ),
            name: CourseModuleModuleName,
          },
          {
            component: (
              <StudentClassBasicModule moduleName={StudentClassModuleName} />
            ),
            name: StudentClassModuleName,
          },
        ]}
      />
    );
  }
}
