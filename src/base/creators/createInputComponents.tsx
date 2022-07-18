import React, {ComponentType} from 'react';
import {
  getErrorString,
  IJDAInput,
  IJDAModuleInput,
} from '../controllers/jda_form_controllers';
import {
  IJDAFormInputControllerProps,
  withJDAFormInputController,
} from '../controllers/jda_form_controllers/withFormInputController';
import {withJDAFormMultiInputController} from '../controllers/jda_form_controllers/withFormMultiInputController';
import {
  IJDAModuleInputControllerProps,
  withModuleInputController,
} from '../controllers/jda_form_controllers/withModuleInputController';
import {IJDAModuleConfig} from '../controllers/jda_module_controller/withModuleController';
import {enum2Array} from '../utils/enum2Array';

import {JDAEnumInput} from '../views/jda_form/form_inputs/JDAEnumInput';
import {JDAObjectInput} from '../views/jda_form/form_inputs/JDAObjectInput';
import {
  IJDAFormMultiInputProps,
  JDAFormMutilInput,
} from '../views/jda_form/JDAFormMutilInput';

export function createFormDataInput<T>(
  Input: ComponentType<IJDAInput<T>> | ComponentType<IJDAModuleInput<T>>,
  isModule?: boolean,
) {
  function _FormInput(
    props: IJDAFormInputControllerProps<T> | IJDAModuleInputControllerProps<T>,
  ) {
    return (
      <Input
        {...(props as any)}
        error={getErrorString(props.fieldState.error, props.rules)}
      />
    );
  }

  const FormInput = isModule
    ? withModuleInputController<T, IJDAModuleInputControllerProps<T>>(
        _FormInput,
      )
    : withJDAFormInputController<T, IJDAFormInputControllerProps<T>>(
        _FormInput,
      );
  const FormMultiInput = withJDAFormMultiInputController<
    T,
    IJDAFormMultiInputProps<T>
  >(JDAFormMutilInput, Input);

  return {Input, FormInput, FormMultiInput};
}

export function createModuleInput<T, SubT = T>(
  config: IJDAModuleConfig<T, SubT>,
) {
  function Input(props: IJDAModuleInput<SubT>) {
    return (
      <JDAObjectInput<SubT> {...props} renderOption={config.quickRender} />
    );
  }
  return createFormDataInput(Input, true);
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
