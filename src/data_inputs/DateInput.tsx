import {Datepicker} from '@ui-kitten/components';
import * as React from 'react';
import {
  IJDAFormInputControllerProps,
  withJDAFormInputController,
} from '../base/controllers/jda_form_controllers/withFormInputController';

export interface IDateInputProps extends IJDAFormInputControllerProps<Date> {}

function DateInput(props: IDateInputProps) {
  return (
    <Datepicker
      label={props.label}
      date={props.field.value}
      onSelect={props.field.onChange}
    />
  );
}

export default withJDAFormInputController<Date, IDateInputProps>(DateInput);
