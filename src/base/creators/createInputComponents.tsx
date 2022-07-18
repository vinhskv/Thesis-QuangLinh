import React, {ComponentType} from 'react';
import {
  IJDAInput,
  IJDAModuleInput,
} from '../controllers/jda_form_controllers/jda_form_input_controller';
import {
  IJDAFormInputControllerProps,
  withJDAFormInputController,
} from '../controllers/jda_form_controllers/jda_form_input_controller/withFormInputController';
import {withJDAFormMultiInputController} from '../controllers/jda_form_controllers/jda_form_input_controller/withFormMultiInputController';
import {
  IJDAModuleInputControllerProps,
  withModuleInputController,
} from '../controllers/jda_form_controllers/jda_form_input_controller/withModuleInputController';
import {withJDAModuleMultiInputController} from '../controllers/jda_form_controllers/jda_form_input_controller/withModuleMultiInputController';
import {IJDAModuleConfig} from '../controllers/jda_module_controller/withModuleController';
import {enum2Array} from '../utils/enum2Array';

import {getErrorString} from '../views/jda_form/form_inputs';
import {JDAEnumInput} from '../views/jda_form/form_inputs/JDAEnumInput';
import {JDAModuleInput} from '../views/jda_form/form_inputs/JDAModuleInput';
import {JDAFormMutilInput} from '../views/jda_form/JDAFormMutilInput';

export function createFormDataInput<T>(
  Input: ComponentType<IJDAInput<T>> | ComponentType<IJDAModuleInput<T>>,
  moduleConfig?: IJDAModuleConfig<T>,
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

  const FormInput = moduleConfig
    ? withModuleInputController<T, IJDAModuleInputControllerProps<T>>(
        _FormInput,
        moduleConfig,
      )
    : withJDAFormInputController<T, IJDAFormInputControllerProps<T>>(
        _FormInput,
      );
  const FormMultiInput = moduleConfig
    ? withJDAModuleMultiInputController(
        JDAFormMutilInput,
        Input as any,
        moduleConfig,
      )
    : withJDAFormMultiInputController(JDAFormMutilInput, Input as any);

  return {Input, FormInput, FormMultiInput};
}

export function createModuleInput<T>(config: IJDAModuleConfig<T>) {
  function Input(props: IJDAModuleInput<T>) {
    return <JDAModuleInput<T> {...props} renderOption={config.quickRender} />;
  }
  return createFormDataInput(Input, config);
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
