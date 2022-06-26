import {FieldError, RegisterOptions} from 'react-hook-form';
import {IJDAInputOptions} from '../../../controllers/jda_form_controllers/withFormInputController';

export interface IJDAInput<T> {
  value?: T;
  onChange?: (value?: T) => void;
  disabled?: boolean;
  label?: string;
  error?: string;
}

export interface IJDAMultiInput<T> {
  values?: T[];
  onChange?: (values: T[]) => void;
  disabled?: boolean;
  label?: string;
}

export const BasicRuleMsg: Partial<
  Record<keyof RegisterOptions<any, any>, string>
> = {
  required: 'Required info!',
  min: 'Minimum value: ',
  max: 'Maximum value: ',
  maxLength: 'Maximum length: ',
  minLength: 'Minimum length: ',
  pattern: '',
  validate: '',
  valueAsNumber: 'Must be number value',
  valueAsDate: 'Must be date value',
};

export function getErrorString(
  error?: FieldError,
  rules?: IJDAInputOptions['rules'],
) {
  if (!error || !rules) return undefined;
  else {
    console.log('Rules-----', rules);
    console.log('violate rule: ', error.type);
    console.log(
      'rule value: ',
      rules[`${error.type}` as keyof IJDAInputOptions['rules']],
    );
    if (error.type === 'validate') return error.message;
    else
      return `${BasicRuleMsg[error.type as keyof RegisterOptions<any, any>]} ${
        rules[`${error.type}` as keyof IJDAInputOptions['rules']]
      }`;
  }
}