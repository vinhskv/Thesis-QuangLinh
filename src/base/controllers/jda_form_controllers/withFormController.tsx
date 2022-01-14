import React, {ComponentType} from 'react';
import {
  DeepPartial,
  FormProvider,
  UnpackNestedValue,
  useForm,
} from 'react-hook-form';

export interface IJDAFormControlerProps<T> {
  submit: () => void;
  defaultValue?: UnpackNestedValue<DeepPartial<T>>;
  onSubmit: (value: T) => void;
}

export function withJDAFormControler<T, P extends IJDAFormControlerProps<T>>(
  Component: ComponentType<P>,
) {
  return function (props: Omit<P, 'submit'>) {
    const form = useForm<T>({defaultValues: props.defaultValue});
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
