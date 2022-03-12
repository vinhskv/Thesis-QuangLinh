import * as React from 'react';
import {
  IJDAFormInputControllerProps,
  withJDAFormInputController,
} from '../base/controllers/jda_form_controllers/withFormInputController';
import {JDAObjectInput} from '../base/views/jda_inputs/JDAObjectInput';
import {
  StudentClass,
  StudentClassApiResource,
} from '../data_types/StudentClass';

export interface IStudentClassInputProps
  extends IJDAFormInputControllerProps<StudentClass> {}

function StudentClassInput(props: IStudentClassInputProps) {
  const addressValue = (ad?: StudentClass) =>
    ad ? `# ${ad.id} ${ad.name}` : '';
  return (
    <JDAObjectInput<StudentClass>
      apiResource={StudentClassApiResource}
      renderOption={addressValue}
      onChange={props.field.onChange}
      value={props.field.value}
      label={props.label}
      disabled={props.disabled}
    />
  );
}
export default withJDAFormInputController<
  StudentClass,
  IStudentClassInputProps
>(StudentClassInput);
