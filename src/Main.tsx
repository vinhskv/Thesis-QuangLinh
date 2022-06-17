
import * as React from 'react';
import JDARouter from './base/views/jda_router/JDARouter';
import { Modules } from './data_types/enums/Modules';
import { AddressModule } from './modules/address/Index';
import { CourseModuleModule } from './modules/course_module/Index';
import { EnrolmentModule } from './modules/enrolment/Index';
import { StudentModule } from './modules/student/Index';
import { StudentClassModule } from './modules/student_class/Index';

export default class MainScreen extends React.Component {
  public render() {
    return (
      <JDARouter homeScreenOptions={{
        title: "Courseman"
      }} routeConfigs={[
        {
          component: StudentClassModule,
          name: Modules.Address,
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
