import React, {ComponentType} from 'react';
import {FormProvider, useForm} from 'react-hook-form';

export interface IJDAFormControlerProps {
  submit: () => void;
  defaultValue?: any;
  onSubmit: (value: any) => void;
}

export function withJDAFormControler<T extends IJDAFormControlerProps>(
  Component: ComponentType<T>,
) {
  return (props: Omit<T, 'submit'>) => {
    const form = useForm({defaultValues: props.defaultValue});
    return (
      <FormProvider {...form}>
        <Component
          {...(props as T)}
          submit={() => form.handleSubmit(data => props.onSubmit(data as T))()}
        />
      </FormProvider>
    );
  };
}
