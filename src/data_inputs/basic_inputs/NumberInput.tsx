import * as React from 'react';
import {
  IJDAFormInputControllerProps,
  withJDAFormInputController,
} from '../../base/controllers/jda_form_controllers/withFormInputController';
import {JDANumberInput} from '../../base/views/jda_inputs/JDANumberInput';

export interface IJDANumberInputProps
  extends IJDAFormInputControllerProps<number> {}

function NumberInput(props: IJDANumberInputProps) {
  return (
    <JDANumberInput
      value={props.field.value}
      onChange={props.field.onChange}
      disabled={props.disabled}
      label={props.label}
    />
  );
}

export default withJDAFormInputController<number, IJDANumberInputProps>(
  NumberInput,
);
