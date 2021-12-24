import React, {ComponentClass, ComponentType} from 'react';
import {FormProvider, useForm} from 'react-hook-form';

export interface IJDAFormControlerProps<T> {
  submit: () => void;
  defaultValue?: T;
  onSubmit: (value: T) => void;
}

export function withJDAFormControler<T, P extends IJDAFormControlerProps<T>>(
  Component: ComponentType<P>,
) {
  return function (props: Omit<P, 'submit'>) {
    const form = useForm({defaultValues: props.defaultValue});
    return (
      <FormProvider {...form}>
        <Component
          {...(props as P)}
          submit={() => form.handleSubmit(data => props.onSubmit(data as T))()}
        />
      </FormProvider>
    );
  };
}
