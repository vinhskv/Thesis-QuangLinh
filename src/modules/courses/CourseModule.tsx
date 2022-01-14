import * as React from 'react';
import BaseModule from '../BaseModule';
import {CourseFormConfig} from './CourseFormConfig';
import CourseListItem from './CourseListItem';

export default function StudentModule() {
  return (
    <BaseModule
      api_resource="students"
      keyField="id"
      formConfig={CourseFormConfig}
      listItemComponent={CourseListItem}
    />
  );
}
