import {Datepicker} from '@ui-kitten/components/ui/datepicker/datepicker.component';
import * as React from 'react';
import {useMemo} from 'react';
import {IJDAInput} from '.';

export interface IJDADateInputProps extends IJDAInput<Date> {}

export function JDADateInput(props: IJDADateInputProps) {
  const date = useMemo(() => {
    if (!props.value) {
      return undefined;
    }
    const value = new Date(props.value);
    return isNaN(value.getTime()) ? undefined : value;
  }, [props.value]);
  return (
    <Datepicker
      disabled={props.disabled}
      label={props.label}
      date={date}
      renderToHardwareTextureAndroid={true}
      onSelect={props.onChange}
    />
  );
}
