import {Input} from '@ui-kitten/components';
import * as React from 'react';
import {
  IJDAFormInputControllerProps,
  withJDAFormInputController,
} from '../base/controlers/jda_form_controllers/withFormInputController';

export interface IJDAStringInputProps
  extends IJDAFormInputControllerProps<string> {}

function StringInput(props: IJDAStringInputProps) {
  return (
    <Input
      value={props.field.value}
      label={props.label}
      onChangeText={props.field.onChange}
    />
  );
}

export default withJDAFormInputController<string, IJDAStringInputProps>(
  StringInput,
);
