import * as React from 'react';
import {StudentClass} from '../../data_types/StudentClass';
import GenericModule from '../GenericModule';
import {StudentFormConfig as StudentClassFormConfig} from './StudentClassFormConfig';
import StudentClassList from './StudentClassList';

export default function StudentClassModule() {
  return (
    <GenericModule<StudentClass>
      api_resource="student-classes"
      formConfig={StudentClassFormConfig}
      ListComponent={StudentClassList}
    />
  );
}
