import * as React from 'react';
import {useMemo} from 'react';
import {
  IJDAFormInputControllerProps,
  withJDAFormInputController,
} from '../../base/controllers/jda_form_controllers/withFormInputController';
import {JDADateInput} from '../../base/views/jda_inputs/JDADateInput';

export interface IDateInputProps extends IJDAFormInputControllerProps<Date> {}

function DateInput(props: IDateInputProps) {
  const date = useMemo(() => {
    const value = new Date(props.field.value);
    return isNaN(value.getTime()) ? undefined : value;
  }, [props.field.value]);
  return (
    <JDADateInput
      value={date}
      onChange={props.field.onChange}
      disabled={props.disabled}
      label={props.label}
    />
  );
}

export default withJDAFormInputController<Date, IDateInputProps>(DateInput);
