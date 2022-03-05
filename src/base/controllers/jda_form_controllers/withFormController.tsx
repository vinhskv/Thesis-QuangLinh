import React, {ComponentType, useCallback} from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import {JDAControlledFormInputComponent} from './withFormInputController';

export enum JDAFormMode {
  CREATE,
  EDIT,
  READ_ONLY,
}
export interface IJDAFormRef<T> {
  setMode: (mode: JDAFormMode) => void;
  setFormValue: (value: T) => void;
}

export interface IJDAFormAPI {
  submit: () => void;
  cancel?: () => void;
  formInputs: React.ReactNode[];
}

export interface IJDAFormControlerProps<T> extends IJDAFormAPI {
  onSubmit: (value: T) => void;
  onCancel?: () => void;
  mode: JDAFormMode;
  initValue?: T;
}

export function withJDAFormControler<T, P extends IJDAFormControlerProps<T>>(
  Component: ComponentType<P>,
  formConfig: Record<keyof T, JDAControlledFormInputComponent<T, any>>,
  labelConfig: Record<keyof T, string>,
  primaryKey: keyof T,
) {
  return (props: Omit<P, keyof IJDAFormAPI>) => {
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

    const checkDisabled = useCallback(
      (key: keyof T) => {
        if (props.mode === JDAFormMode.READ_ONLY) {
          return true;
        } else if (
          props.mode === JDAFormMode.EDIT &&
          String(key) === String(primaryKey)
        ) {
          return true;
        } else {
          return false;
        }
      },
      [props.mode],
    );

    const formInputs = Object.keys(formConfig).map(key => {
      const InputView: JDAControlledFormInputComponent<T, any> =
        formConfig[key as keyof T];
      return (
        <InputView
          name={key}
          label={labelConfig[key as keyof T]}
          disabled={checkDisabled(key as keyof T)}
        />
      );
    });
    return (
      <FormProvider {...form}>
        <Component
          {...(props as P)}
          formInputs={formInputs}
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
    formConfig: Record<keyof T, JDAControlledFormInputComponent<T, any>>,
    labelConfig: Record<keyof T, string>,
    primaryKey: keyof T,
  ) =>
    withJDAFormControler<T, P>(Component, formConfig, labelConfig, primaryKey);
}

export type JDAControlledFormComponent<
  T,
  P extends IJDAFormControlerProps<T>,
> = ReturnType<TypeUltil<T, P>['controlled']>;
