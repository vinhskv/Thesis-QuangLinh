import * as React from 'react';
import {List} from 'react-native-paper';
import {IJDAMultiFormInputControllerProps} from '../../controllers/jda_form_controllers/withMultilFormInputController';

export interface IJDAMultiFormInputProps<T>
  extends IJDAMultiFormInputControllerProps<T> {}

export function JDAMultiFormInput<T>(props: IJDAMultiFormInputProps<T>) {
  return (
    <List.Section>
      <List.Accordion title={props.label}>{props.formItems}</List.Accordion>
    </List.Section>
  );
}
