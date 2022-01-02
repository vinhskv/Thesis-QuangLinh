import {Select, SelectItem} from '@ui-kitten/components';
import * as React from 'react';
import {
  IJDAFormInputControllerProps,
  withJDAFormInputController,
} from '../base/controlers/jda_form_controllers/withFormInputController';
import {Gender} from '../data_types/Gender';

export interface IGenderInputProps
  extends IJDAFormInputControllerProps<Gender> {}

function GenderInput(props: IGenderInputProps) {
  return (
    <Select
      label={props.label}
      value={props.field.value}
      onSelect={index =>
        props.field.onChange(
          Object.values(Gender)[parseInt(index.toString(), 0) - 1],
        )
      }>
      {Object.keys(Gender).map(k => (
        <SelectItem key={k} title={k} />
      ))}
    </Select>
  );
}
export default withJDAFormInputController<Gender, IGenderInputProps>(
  GenderInput,
);
