import * as React from 'react';
import {
  IJDAFormInputControllerProps,
  withJDAFormInputController,
} from '../base/controllers/jda_form_controllers/withFormInputController';
import {
  IJDAMultiFormInputControllerProps,
  withJDAMultiFormInputController,
} from '../base/controllers/jda_form_controllers/withMultilFormInputController';
import {JDAMultiFormInput} from '../base/views/jda_form/JDAMultiFormInput';
import {IJDAInput} from '../base/views/jda_inputs';
import {JDAObjectInput} from '../base/views/jda_inputs/JDAObjectInput';
import {Student, StudentApiResource} from '../data_types/Student';

function StudentInput(props: IJDAInput<Student>) {
  const addressValue = (ad?: Student) => (ad ? `# ${ad.id} ${ad.name}` : '');

  return (
    <JDAObjectInput<Student>
      {...props}
      apiResource={StudentApiResource}
      renderOption={addressValue}
    />
  );
}

function StudentFormInput(props: IJDAFormInputControllerProps<Student>) {
  return (
    <StudentInput
      onChange={props.field.onChange}
      value={props.field.value}
      label={props.label}
      disabled={props.disabled}
    />
  );
}

const MultiStudentFormInput = withJDAMultiFormInputController<
  Student,
  IJDAMultiFormInputControllerProps<Student>,
  IJDAInput<Student>
>(JDAMultiFormInput, StudentInput);

export default withJDAFormInputController<
  Student,
  IJDAFormInputControllerProps<Student>
>(StudentFormInput);
