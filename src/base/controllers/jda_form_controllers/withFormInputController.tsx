import React, {ComponentType} from 'react';
import {
  Controller,
  ControllerFieldState,
  useFormContext,
  UseFormStateReturn,
} from 'react-hook-form';

export interface IJDAFormInputAPI<T> {
  field: {
    onChange: (value: T) => void;
    value: T;
  };
  fieldState: ControllerFieldState;
  formState: UseFormStateReturn<T>;
}

export interface IJDAFormInputControllerProps<T> extends IJDAFormInputAPI<T> {
  name: string;
  label: string;
}

export function withJDAFormInputController<
  T,
  P extends IJDAFormInputControllerProps<T>,
>(Component: ComponentType<P>) {
  return (props: Omit<P, keyof IJDAFormInputAPI<T>>) => {
    const {control} = useFormContext();
    return (
      <Controller
        name={props.name}
        control={control}
        render={item => (
          <Component
            {...(props as P)}
            {...item}
            field={{
              value: item.field.value,
              onChange: (value: T) => item.field.onChange(value),
            }}
          />
        )}
      />
    );
  };
}
