export interface IJDAInput<T> {
  value?: T;
  onChange?: (value?: T) => void;
  disabled?: boolean;
  label?: string;
  required?: boolean;
}

export interface IJDAMultiInput<T> {
  values?: T[];
  onChange?: (values: T[]) => void;
  disabled?: boolean;
  label?: string;
  required?: boolean;
}
