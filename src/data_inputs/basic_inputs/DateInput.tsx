import {Datepicker} from '@ui-kitten/components';
import * as React from 'react';
import {useMemo} from 'react';
import {
  IJDAFormInputControllerProps,
  withJDAFormInputController,
} from '../../base/controllers/jda_form_controllers/withFormInputController';

export interface IDateInputProps extends IJDAFormInputControllerProps<Date> {}

function DateInput(props: IDateInputProps) {
  const date = useMemo(() => {
    const value = new Date(props.field.value);
    return isNaN(value.getTime()) ? undefined : value;
  }, [props.field.value]);
  return (
    <Datepicker
      disabled={props.disabled}
      label={props.label}
      date={date}
      min={new Date(1800, 0, 1)}
      max={new Date(2800, 0, 1)}
      renderToHardwareTextureAndroid={true}
      onSelect={props.field.onChange}
    />
  );
}

export default withJDAFormInputController<Date, IDateInputProps>(DateInput);
