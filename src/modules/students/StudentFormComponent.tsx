import * as React from 'react';
import {withJDAFormControler} from '../../base/controlers/jda_form_controlers/withFormController';
import JDAForm, {IJDAFormProps} from '../../base/views/jda_form/JDAForm';
import JDAStringInput from '../../base/views/jda_form/jda_form_basic_inputs/JDAStringInput';
import {Student, StudentFieldLabel} from '../../data_types/Student';

const StudentForm = withJDAFormControler<Student, IJDAFormProps<Student>>(
  JDAForm,
);

export interface IStudentFormScreenProps {}

export function StudentFormComponent(props: IStudentFormScreenProps) {
  return (
    <StudentForm formName="Student" onSubmit={v => {}}>
      {Object.entries(StudentFieldLabel).map((e,i) => (
        <JDAStringInput key={i} label={e[1]} name={e[0]} />
      ))}
    </StudentForm>
  );
}
