import * as React from 'react';
import BaseModule from '../BaseModule';
import {StudentFormConfig} from './StudentFormConfig';
import StudentListItem from './StudentListItem';

export default function StudentModule() {
  return (
    <BaseModule
      api_resource="students"
      keyField="id"
      formConfig={StudentFormConfig}
      listItemComponent={StudentListItem}
    />
  );
}
