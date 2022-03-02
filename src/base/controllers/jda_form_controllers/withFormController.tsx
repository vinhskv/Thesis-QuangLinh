import React, {ComponentType} from 'react';
import {
  DeepPartial,
  FormProvider,
  UnpackNestedValue,
  useForm,
} from 'react-hook-form';

export interface IJDAFormAPI {
  submit: () => void;
}

export interface IJDAFormControlerProps<T> {
  defaultValue?: UnpackNestedValue<DeepPartial<T>>;
  onSubmit: (value: T) => void;
}

export function withJDAFormControler<T, P extends IJDAFormControlerProps<T>>(
  Component: ComponentType<P>,
) {
  return function (props: Omit<P, keyof IJDAFormAPI>) {
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

//Export componentType
class TypeUltil<T, P extends IJDAFormControlerProps<T>> {
  //TODO if you change parammeter of withJDAListController function, you must change parameters of controlled function below
  controlled = (Component: ComponentType<P>) =>
    withJDAFormControler<T, P>(Component);
}

export type JDAControlledFormComponent<
  T,
  P extends IJDAFormControlerProps<T>,
> = ReturnType<TypeUltil<T, P>['controlled']>;
