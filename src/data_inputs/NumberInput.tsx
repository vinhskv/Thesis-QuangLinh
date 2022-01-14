import {Input} from '@ui-kitten/components';
import * as React from 'react';
import {
  IJDAFormInputControllerProps,
  withJDAFormInputController,
} from '../base/controllers/jda_form_controllers/withFormInputController';

export interface IJDANumberInputProps
  extends IJDAFormInputControllerProps<number> {}

function NumberInput(props: IJDANumberInputProps) {
  return (
    <Input
      value={String(props.field.value)}
      label={props.label}
      onChangeText={t => props.field.onChange(parseInt(t))}
      keyboardType="numeric"
    />
  );
}

export default withJDAFormInputController<number, IJDANumberInputProps>(
  NumberInput,
);
