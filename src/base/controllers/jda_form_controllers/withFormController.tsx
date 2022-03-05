import React, {ComponentType, useCallback} from 'react';
import {FormProvider, useForm} from 'react-hook-form';

export enum JDAFormMode {
  CREATE,
  EDIT,
  READ_ONLY,
}
export interface IJDAFormRef<T> {
  setMode: (mode: JDAFormMode) => void;
  setFormValue: (value: T) => void;
}

export interface IJDAFormAPI<T> {
  submit: () => void;
  cancel?: () => void;
  formConfig: Record<keyof T, React.ReactNode>;
}

export interface IJDAFormControlerProps<T> extends IJDAFormAPI<T> {
  onSubmit: (value: T) => void;
  onCancel?: () => void;
  mode: JDAFormMode;
  initValue?: T;
}

export function withJDAFormControler<T, P extends IJDAFormControlerProps<T>>(
  Component: ComponentType<P>,
  formConfig: Record<keyof T, React.ReactNode>,
) {
  return (props: Omit<P, keyof IJDAFormAPI<T>>) => {
    const form = useForm<T>({defaultValues: props.initValue as any});
    // useImperativeHandle(ref, () => ({
    //   setMode: mode => {
    //     console.log('change form ===========', mode);
    //     setFormMode(mode);
    //   },
    //   setFormValue: value => {
    //     console.log('setform value', value);
    //     form.reset(value as any);
    //   },
    // }));
    const handleSubmit = useCallback(
      (data: T) => {
        console.log(data);
        props.onSubmit(data);
      },
      [props],
    );
    return (
      <FormProvider {...form}>
        <Component
          {...(props as P)}
          formConfig={formConfig}
          submit={form.handleSubmit(d => handleSubmit(d as T))}
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
