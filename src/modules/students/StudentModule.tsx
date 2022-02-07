import * as React from 'react';
import {Student} from '../../data_types/Student';
import GenericModule from '../GenericModule';
import {StudentFormConfig} from './StudentFormConfig';
import StudentList from './StudentList';

export default function StudentModule() {
  return (
    <GenericModule<Student>
      api_resource="students"
      formConfig={StudentFormConfig}
      ListComponent={StudentList}
    />
  );
}
