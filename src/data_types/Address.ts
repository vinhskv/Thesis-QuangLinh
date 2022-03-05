import {Student} from './Student';

export interface Address {
  id: number;
  name: string;
  student?: Student;
}

export const AddressPrimaryKey: keyof Address = 'id';
export const AddressApiResource: string = 'addresses';
export const AddressModuleName: string = 'Addresses';
export const AddressFieldLabel: Record<keyof Address, string> = {
  id: 'ID',
  name: 'City name',
  student: 'Student',
};
