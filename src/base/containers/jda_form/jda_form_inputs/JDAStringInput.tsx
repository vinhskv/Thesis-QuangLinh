import * as React from 'react';
import {Input} from 'react-native-elements/dist/input/Input';
import {
  IJDAFormInputControllerProps,
  withJDAFormInputController,
} from '../../../controlers/jda_form_controlers/withFormInputController';

export interface IJDAStringInputProps extends IJDAFormInputControllerProps {
  label: string;
}

function JDAStringInput(props: IJDAStringInputProps) {
  return (
    <Input
      value={props.field.value}
      label={props.label}
      onChangeText={props.field.onChange}
    />
  );
}

export default withJDAFormInputController(JDAStringInput);
