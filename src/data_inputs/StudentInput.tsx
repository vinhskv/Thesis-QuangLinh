import {Autocomplete} from '@ui-kitten/components';
import * as React from 'react';
import {
  IJDAFormInputControllerProps,
  withJDAFormInputController,
} from '../base/controlers/jda_form_controllers/withFormInputController';
import {Address} from '../data_types/Address';

export interface IStudentInputProps
  extends IJDAFormInputControllerProps<Address> {}

function StudentInput(_props: IStudentInputProps) {
  return <Autocomplete></Autocomplete>;
}

export default withJDAFormInputController<Address, IStudentInputProps>(
  StudentInput,
);
