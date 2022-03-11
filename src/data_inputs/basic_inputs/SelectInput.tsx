import {Select, SelectItem} from '@ui-kitten/components';
import * as React from 'react';
import {
  IJDAFormInputControllerProps,
  withJDAFormInputController,
} from '../../base/controllers/jda_form_controllers/withFormInputController';

export interface SelectInput<T> {
  values: T[];
}

export default function EnumInput<T>(props: SelectInput<T>) {
  return withJDAFormInputController<T, IJDAFormInputControllerProps<T>>(
    (_props: IJDAFormInputControllerProps<T>) => {
      return (
        <Select
          disabled={_props.disabled}
          multiSelect={false}
          label={_props.label}
          value={String(_props.field.value || props.values[0])}
          onSelect={index => _props.field.onChange(props.values[index as any])}>
          {props.values.map((k, i) => (
            <SelectItem key={i} title={String(k)} />
          ))}
        </Select>
      );
    },
  );
}
