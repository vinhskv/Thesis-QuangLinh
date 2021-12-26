import {Student} from './Student';

export interface Address {
  id: string;
  name: string;
  student: Student;
}

export const AddressFieldLabel: Record<keyof Address, string> = {
  id: 'ID',
  name: 'City name',
  student: 'Student',
};
