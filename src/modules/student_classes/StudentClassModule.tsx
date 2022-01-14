import * as React from 'react';
import BaseModule from '../BaseModule';
import {StudentFormConfig as StudentClassFormConfig} from './StudentClassFormConfig';
import StudentClassListItem from './StudentClassListItem';

export default function StudentClassModule() {
  return (
    <BaseModule
      api_resource="student-classes"
      keyField="id"
      formConfig={StudentClassFormConfig}
      listItemComponent={StudentClassListItem}
    />
  );
}
