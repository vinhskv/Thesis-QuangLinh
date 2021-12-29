import {Input} from '@ui-kitten/components';
import * as React from 'react';
import {
  IJDAFormInputControllerProps,
  withJDAFormInputController,
} from '../../../controlers/jda_form_controlers/withFormInputController';

export interface IJDAStringInputProps
  extends IJDAFormInputControllerProps<number> {}

function JDANumberInput(props: IJDAStringInputProps) {
  return (
    <Input
      value={props.field.value}
      label={props.label}
      keyboardType="numeric"
    />
  );
}

export default withJDAFormInputController<number, IJDAStringInputProps>(
  JDANumberInput,
);
