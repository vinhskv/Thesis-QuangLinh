import React, {
  ComponentType,
  forwardRef,
  useCallback,
  useImperativeHandle,
  useState,
  useEffect,
} from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import {IJDAModuleConfig} from '../jda_module_controller/withModuleController';
import {
  IJDAInputOptions,
  JDAControlledFormInputComponent,
} from './withFormInputController';
import {JDAControlledFormMultiInputComponent} from './withFormMultiInputController';

export enum JDAFormMode {
  CREATE,
  EDIT,
  READ_ONLY,
}
export interface IJDAFormRef<T> {
  setMode: (mode: JDAFormMode) => void;
  setFormValue: (value?: T) => void;
}

export interface IJDAFormAPI {
  submit: () => void;
  cancel?: () => void;
  formInputs: React.ReactNode[];
}

export type IJDAFormConfig<T> = Partial<
  Record<
    keyof T,
    {
      component:
        | JDAControlledFormInputComponent<T, any>
        | JDAControlledFormMultiInputComponent<T, any, any>;
      options?: IJDAInputOptions;
    }
  >
>;

export interface IJDAFormControlerProps<T> extends IJDAFormAPI {
  onSubmit: (value: T) => void;
  onCancel?: () => void;
  mode: JDAFormMode;
  initValue?: T;
}
export function withJDAFormControler<
  T,
  P extends IJDAFormControlerProps<T>,
  SubT = T,
>(
  Component: ComponentType<P>,
  formConfig: IJDAFormConfig<T>,
  moduleConfig: IJDAModuleConfig<T, SubT>,
) {
  return forwardRef<IJDAFormRef<T>, Omit<P, keyof IJDAFormAPI>>(
    (props, ref) => {
      const form = useForm<T>({
        reValidateMode: 'onChange',
        mode: 'onSubmit',
      });
      const [mode, setMode] = useState<JDAFormMode>(props.mode);

      useEffect(() => {
        console.log('initial value', props.initValue);

        if (props.initValue) form.reset(props.initValue as any);
      }, [form, props.initValue]);

      const setFormValue = useCallback(
        (value?: T) => {
          console.log('value', value);
          if (value) {
            form.reset(value as any);
          }
        },
        [form],
      );

      useImperativeHandle(ref, () => ({
        setFormValue,
        setMode,
      }));

      const handleSubmit = useCallback(
        (data: T) => {
          props.onSubmit(data);
        },
        [props],
      );

      const checkDisabled = useCallback(
        (key: keyof T) => {
          if (
            mode === JDAFormMode.READ_ONLY ||
            String(key) === String(moduleConfig.primaryKey)
          ) {
            return true;
          } else {
            return false;
          }
        },
        [mode],
      );

      const formInputs = Object.keys(formConfig).map(key => {
        const config = formConfig[key as keyof T];
        const InputView: JDAControlledFormInputComponent<T, any> =
          config?.component as any;
        return config?.options?.hiddenInMode?.includes(mode) ? undefined : (
          <InputView
            name={key}
            {...config?.options}
            label={moduleConfig.fieldLabel[key as keyof T]}
            disabled={checkDisabled(key as keyof T)}
          />
        );
      });
      return (
        <FormProvider {...form}>
          <Component
            {...(props as P)}
            mode={mode}
            formInputs={formInputs}
            submit={form.handleSubmit(d => handleSubmit(d as T))}
            cancel={props.onCancel}
          />
        </FormProvider>
      );
    },
  );
}

//Export componentType
class TypeUltil<T, P extends IJDAFormControlerProps<T>> {
  //TODO if you change parammeter of withJDAListController function, you must change parameters of controlled function below
  controlled = (
    Component: ComponentType<P>,
    formConfig: IJDAFormConfig<T>,
    moduleConfig: IJDAModuleConfig<T>,
  ) => withJDAFormControler<T, P>(Component, formConfig, moduleConfig);
}

export type JDAControlledFormComponent<
  T,
  P extends IJDAFormControlerProps<T>,
> = ReturnType<TypeUltil<T, P>['controlled']>;
