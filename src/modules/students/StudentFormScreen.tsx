import * as React from 'react';
import JDAForm from '../../base/views/jda_form/JDAForm';
import JDAStringInput from '../../base/views/jda_form/jda_form_inputs/JDAStringInput';

export interface IStudentFormScreenProps {}

export function StudentFormScreen(props: IStudentFormScreenProps) {
  return (
    <JDAForm formName="Student" onSubmit={v => {}}>
      <JDAStringInput label="ID" name="id" />
      <JDAStringInput label="Name" name="name" />
      <JDAStringInput label="ID" name="id" />
      <JDAStringInput label="ID" name="id" />
      <JDAStringInput label="ID" name="id" />
      <JDAStringInput label="ID" name="id" />
    </JDAForm>
  );
}
