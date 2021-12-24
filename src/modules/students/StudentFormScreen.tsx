import * as React from 'react';
import {withJDAFormControler} from '../../base/controlers/jda_form_controlers/withFormController';
import JDAForm, {IJDAFormProps} from '../../base/views/jda_form/JDAForm';
import JDAStringInput from '../../base/views/jda_form/jda_form_inputs/JDAStringInput';
import { IStudent } from '../../data_types/Student';

export interface IStudentFormScreenProps {}
const StudentForm = withJDAFormControler<IStudent, IJDAFormProps<IStudent>>(
  JDAForm,
);
export function StudentFormScreen(props: IStudentFormScreenProps) {
  return (
    <StudentForm formName="Student" onSubmit={v => {}}>
      <JDAStringInput label="ID" name="id" />
      <JDAStringInput label="Name" name="name" />
    </StudentForm>
  );
}
