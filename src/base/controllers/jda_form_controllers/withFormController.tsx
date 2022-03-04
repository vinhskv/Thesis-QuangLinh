import React, {ComponentType} from 'react';
import {FormProvider, useForm} from 'react-hook-form';

export enum JDAFormMode {
  CREATE,
  EDIT,
  READ_ONLY,
}

export interface IJDAFormAPI<T> {
  submit: () => void;
  cancel?: () => void;
  formConfig: Record<keyof T, React.ReactNode>;
}

export interface IJDAFormControlerProps<T> extends IJDAFormAPI<T> {
  onSubmit: (value: T) => void;
  onCancel?: () => void;
}

export function withJDAFormControler<T, P extends IJDAFormControlerProps<T>>(
  Component: ComponentType<P>,
  formConfig: Record<keyof T, React.ReactNode>,
) {
  return function (props: Omit<P, keyof IJDAFormAPI<T>>) {
    const form = useForm<T>();
    return (
      <FormProvider {...form}>
        <Component
          {...(props as P)}
          formConfig={formConfig}
          submit={() => form.handleSubmit(data => props.onSubmit(data as T))()}
          cancel={props.onCancel}
        />
      </FormProvider>
    );
  };
}

//Export componentType
class TypeUltil<T, P extends IJDAFormControlerProps<T>> {
  //TODO if you change parammeter of withJDAListController function, you must change parameters of controlled function below

  controlled = (
    Component: ComponentType<P>,
    formConfig: Record<keyof T, React.ReactNode>,
  ) => withJDAFormControler<T, P>(Component, formConfig);
}

export type JDAControlledFormComponent<
  T,
  P extends IJDAFormControlerProps<T>,
> = ReturnType<TypeUltil<T, P>['controlled']>;
