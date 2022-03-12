import * as React from 'react';
import {
  ArrayPath,
  Controller,
  useFieldArray,
  UseFieldArrayReturn,
  useFormContext,
} from 'react-hook-form';
import {IJDAInput} from '../../views/jda_inputs';
interface IJDAMultiFormInputAPI<T> extends UseFieldArrayReturn<T> {
  formItems: React.ReactNode[];
}
export interface IJDAMultiFormInputControllerProps<T>
  extends IJDAMultiFormInputAPI<T> {
  name: ArrayPath<T>;
  label: string;
  disabled?: boolean;
}

export function withJDAMultiFormInputController<
  T,
  Props extends IJDAMultiFormInputControllerProps<T>,
  SingleInputProps extends IJDAInput<T>,
>(
  Component: React.ComponentType<Props>,
  SingleInputComponent: React.ComponentType<SingleInputProps>,
) {
  return (props: Omit<Props, keyof IJDAMultiFormInputAPI<T>>) => {
    const {control} = useFormContext<T>();
    const multiInputControl = useFieldArray<T>({control, name: props.name});
    const formItems = multiInputControl.fields.map((field, index) => (
      <Controller
        key={field.id}
        control={control}
        name={`${props.name}.${index}` as any}
        render={({field: itemInput}) => (
          <SingleInputComponent
            {...({} as any)}
            label={props.label}
            disabled={props.disabled}
            value={itemInput.value}
            onChange={itemInput.onChange}
          />
        )}
      />
    ));

    return (
      <Component
        {...(props as Props)}
        {...multiInputControl}
        formItems={formItems}
      />
    );
  };
}

//Export componentType
class TypeUltil<
  T,
  Props extends IJDAMultiFormInputControllerProps<T>,
  SingleInputProps extends IJDAInput<T>,
> {
  //TODO if you change parammeter of withJDAListController function, you must change parameters of controlled function below

  controlled = (
    Component: React.ComponentType<Props>,
    SingleInputComponent: React.ComponentType<SingleInputProps>,
  ) =>
    withJDAMultiFormInputController<T, Props, SingleInputProps>(
      Component,
      SingleInputComponent,
    );
}

export type JDAControlledFormMultiInputComponent<
  T,
  Props extends IJDAMultiFormInputControllerProps<T>,
  SingleInputProps extends IJDAInput<T>,
> = ReturnType<TypeUltil<T, Props, SingleInputProps>['controlled']>;
