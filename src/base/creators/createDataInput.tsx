import React, {ComponentType} from 'react';
import {
  IJDAFormInputControllerProps,
  withJDAFormInputController,
} from '../controllers/jda_form_controllers/withFormInputController';
import {
  IJDAFormMultiInputControllerProps,
  withJDAFormMultiInputController,
} from '../controllers/jda_form_controllers/withFormMultiInputController';
import {ModuleConfig} from '../controllers/jda_module_controller';
import {enum2Array} from '../utils/enum2Array';
import {JDAFormMutilInput} from '../views/jda_form/JDAFormMutilInput';
import {IJDAInput} from '../views/jda_inputs';
import {JDAEnumInput} from '../views/jda_inputs/JDAEnumInput';
import {JDAObjectInput} from '../views/jda_inputs/JDAObjectInput';

export function createFormDataInput<T>(Input: ComponentType<IJDAInput<T>>) {
  function _FormInput(props: IJDAFormInputControllerProps<T>) {
    return (
      <Input
        onChange={props.field.onChange}
        value={props.field.value}
        label={props.label}
        disabled={props.disabled}
      />
    );
  }
  const FormInput = withJDAFormInputController<
    T,
    IJDAFormInputControllerProps<T>
  >(_FormInput);
  const FormMultiInput = withJDAFormMultiInputController<
    T,
    IJDAFormMultiInputControllerProps<T>,
    IJDAInput<T>
  >(JDAFormMutilInput, Input);

  return {Input, FormInput, FormMultiInput};
}

export function createModuleInput<T>(config: ModuleConfig<T>) {
  function Input(props: IJDAInput<T>) {
    return (
      <JDAObjectInput<T>
        {...props}
        apiResource={config.apiResource}
        renderOption={config.quickRender}
      />
    );
  }
  return createFormDataInput(Input);
}

export function createEnumInput(enumObject: any) {
  type T = typeof enumObject;
  const Input = (props: IJDAInput<T>) =>
    JDAEnumInput<T>({
      ...props,
      enumObject: enum2Array<T>(enumObject),
    });

  return createFormDataInput(Input);
}
