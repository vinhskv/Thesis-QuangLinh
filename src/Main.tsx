import * as React from 'react';
import JDADrawer from './base/views/jda_drawer/JDADrawer';
import {
  AddressBasicList,
  AddressBasicModule,
  AddressBasicForm,
} from './modules/addresses';
import {AddressFormConfig} from './modules/addresses/AddressFormConfig';
import CourseModule from './modules/courses/CourseModule';
import EnrolmentModule from './modules/enrolments/EnrolmentModule';
import StudentModule from './modules/students/StudentModule';
import StudentClassModule from './modules/student_classes/StudentClassModule';

export default class MainScreen extends React.Component {
  public render() {
    return (
      <JDADrawer
        initialRoute={'Addresses'}
        routes={[
          {component: <StudentModule />, name: 'Student'},
          {
            component: (
              <AddressBasicModule
                ListView={AddressBasicList}
                listControlProps={{}}
                FormView={AddressBasicForm}
                formControlProps={{
                  formConfig: AddressFormConfig,
                }}
              />
            ),
            name: 'Addresses',
          },
          {
            component: <EnrolmentModule />,
            name: 'Enrolments',
          },
          {
            component: <CourseModule />,
            name: 'Courses',
          },
          {
            component: <StudentClassModule />,
            name: 'Student Class',
          },
        ]}
      />
    );
  }
}
