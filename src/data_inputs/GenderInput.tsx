import {Select, SelectItem} from '@ui-kitten/components';
import * as React from 'react';
import {
  IJDAFormInputControllerProps,
  withJDAFormInputController,
} from '../base/controllers/jda_form_controllers/withFormInputController';
import {Student_Gender} from '../data_types/Student_Gender';

export interface IGenderInputProps
  extends IJDAFormInputControllerProps<Student_Gender> {}

function GenderInput(props: IGenderInputProps) {
  return (
    <Select
      label={props.label}
      value={props.field.value}
      onSelect={index =>
        props.field.onChange(
          Object.values(Student_Gender)[parseInt(index.toString(), 0) - 1],
        )
      }>
      {Object.keys(Student_Gender).map(k => (
        <SelectItem key={k} title={k} />
      ))}
    </Select>
  );
}
export default withJDAFormInputController<Student_Gender, IGenderInputProps>(
  GenderInput,
);
