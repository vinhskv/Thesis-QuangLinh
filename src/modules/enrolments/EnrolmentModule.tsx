import * as React from 'react';
import {Enrolment} from '../../data_types/Enrolment';
import GenericModule from '../GenericModule';
import {EnrolmentFormConfig} from './EnrolmentFormConfig';
import EnrolmentList from './EnrolmentList';

export default function EnrolmentModule() {
  return (
    <GenericModule<Enrolment>
      api_resource="enrolments"
      formConfig={EnrolmentFormConfig}
      ListComponent={EnrolmentList}
    />
  );
}
