import {Student} from './Student';

export interface Address {
  id: string;
  name: string;
  student: Student;
}

export const AddressKeyField: keyof Address = 'id';

export const AddressFieldLabel: Record<keyof Address, string> = {
  id: 'ID',
  name: 'City name',
  student: 'Student',
};
