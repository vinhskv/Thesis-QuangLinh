import {Address} from './Address';

export enum Gender {
  Male = 'Male',
  Female = 'Female',
}

export interface Student {
  id: string;
  name: string;
  gender: Gender;
  dob: Date;
  email: string;
  address: Address;
}
export const StudentPrimaryKey: keyof Student = 'id';

export const StudentFieldLabel: Record<keyof Student, string> = {
  id: 'ID',
  name: 'Name',
  gender: 'Gender',
  dob: 'Date of birth',
  email: 'Email',
  address: 'Address',
};
export const StudentApiResource: string = 'students';
export const StudentModuleName: string = 'Students';

export interface StudentPOST extends Omit<Student, 'id' | 'address'> {
  addressId: string;
}

export function toStudentPOST(s: Student): StudentPOST {
  return {
    ...s,
    addressId: s.address.id,
  };
}
