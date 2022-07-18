import {FieldError, RegisterOptions} from 'react-hook-form';
import {IJDAInputOptions} from './withFormInputController';

export interface IJDAInput<T> {
  value?: T;
  onChange?: (value?: T) => void;
  disabled?: boolean;
  label?: string;
  error?: string;
}

export interface IJDAModuleInput<T> extends IJDAInput<T> {
  onCreate: () => void;
  onEdit: () => void;
  onShowDetail: () => void;
  onSearch?: (keyword: string) => Promise<T[]>;
  options: T[];
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
    // console.log('Rules-----', rules);
    // console.log('violate rule: ', error.type);
    // console.log(
    //   'rule value: ',
    //   rules[`${error.type}` as keyof IJDAInputOptions['rules']],
    // );
    if (error.type === 'validate') return error.message;
    switch (error.type) {
      case 'validate':
        return error.message;
      case 'required':
        return 'This is required info';
      default:
        return `${
          BasicRuleMsg[error.type as keyof RegisterOptions<any, any>]
        } ${rules[`${error.type}` as keyof IJDAInputOptions['rules']]}`;
    }
  }
}
