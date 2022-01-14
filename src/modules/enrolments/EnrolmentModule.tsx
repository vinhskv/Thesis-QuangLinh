import * as React from 'react';
import BaseModule from '../BaseModule';
import {EnrolmentFormConfig} from './EnrolmentFormConfig';
import EnrolmentListItem from './EnrolmentListItem';

export default function EnrolmentModule() {
  return (
    <BaseModule
      api_resource="enrolments"
      keyField="id"
      formConfig={EnrolmentFormConfig}
      listItemComponent={EnrolmentListItem}
    />
  );
}
