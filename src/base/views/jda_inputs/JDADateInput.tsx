import {Datepicker} from '@ui-kitten/components/ui/datepicker/datepicker.component';
import * as React from 'react';
import {IJDAInput} from '.';

export interface IJDADateInputProps extends IJDAInput<Date> {}

export function JDADateInput(props: IJDADateInputProps) {
  return (
    <Datepicker
      disabled={props.disabled}
      label={props.label}
      date={props.value}
      renderToHardwareTextureAndroid={true}
      onSelect={props.onChange}
    />
  );
}
