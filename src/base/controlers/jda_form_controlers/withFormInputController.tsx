import React, {ComponentType} from 'react';
import {
  Controller,
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
  Path,
  useFormContext,
  UseFormStateReturn,
} from 'react-hook-form';

export interface IJDAFormInputControllerProps<T> {
  name: Path<T>;
  label: string;
  field: ControllerRenderProps<T>;
  fieldState: ControllerFieldState;
  formState: UseFormStateReturn<T>;
}

export function withJDAFormInputController<
  T,
  P extends IJDAFormInputControllerProps<T>,
>(Component: ComponentType<P>) {
  return (props: Omit<P, 'field' | 'fieldState' | 'formState'>) => {
    const {control} = useFormContext<T>();
    return (
      <Controller
        name={props.name}
        control={control}
        render={item => <Component {...(props as P)} {...item} />}
      />
    );
  };
}
