import React, { ComponentType } from 'react';
import {
  Controller,
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues, useFormContext,
  UseFormStateReturn
} from 'react-hook-form';

export interface IJDAFormInputControllerProps {
  name: string;
  field: ControllerRenderProps<FieldValues, string>;
  fieldState: ControllerFieldState;
  formState: UseFormStateReturn<FieldValues>;
}

export function withJDAFormInputController<T extends IJDAFormInputControllerProps>(
  Component: ComponentType<T>,
) {
  return (props: Omit<T, 'field' | 'fieldState' | 'formState'>) => {
    const {control} = useFormContext();
    return (
      <Controller
        name={props.name}
        control={control}
        render={item => <Component {...(props as T)} {...item} />}
      />
    );
  };
}
