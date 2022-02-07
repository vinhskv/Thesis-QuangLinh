import * as React from 'react';
import {CourseModule} from '../../data_types/CourseModule';
import GenericModule from '../GenericModule';
import {CourseFormConfig} from './CourseFormConfig';
import CourseList from './CourseList';

export default function StudentModule() {
  return (
    <GenericModule<CourseModule>
      api_resource="course-modules"
      formConfig={CourseFormConfig}
      ListComponent={CourseList}
    />
  );
}
