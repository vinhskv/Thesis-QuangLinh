import {Select, SelectItem} from '@ui-kitten/components';
import * as React from 'react';
import {
  IJDAFormInputControllerProps,
  withJDAFormInputController,
} from '../../base/controllers/jda_form_controllers/withFormInputController';
import {Gender} from '../../data_types/Student';

export interface IEnumInputProps {
  enum: any;
}

export default function EnumInput(props: IEnumInputProps) {
  type Enum = typeof props.enum;
  return withJDAFormInputController<Enum, IJDAFormInputControllerProps<Enum>>(
    (_props: IJDAFormInputControllerProps<Enum>) => {
      return (
        <Select
          disabled={_props.disabled}
          multiSelect={false}
          label={_props.label}
          value={_props.field.value}
          onSelect={index =>
            _props.field.onChange(
              Object.values(props.enum)[parseInt(index.toString(), 10) - 1],
            )
          }>
          {Object.keys(Gender).map(k => (
            <SelectItem key={k} title={k} />
          ))}
        </Select>
      );
    },
  );
}
