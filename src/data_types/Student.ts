import {Address} from './Address';
import {Student_Gender} from './Student_Gender';

export interface Student {
  id: string;
  name: string;
  gender: Student_Gender;
  dob: Date;
  email: string;
  address: Address;
}
export const StudentKeyField: keyof Student = 'id';

export const StudentFieldLabel: Record<keyof Student, string> = {
  id: 'ID',
  name: 'Name',
  gender: 'Gender',
  dob: 'Date of birth',
  email: 'Email',
  address: 'Address',
};

export interface StudentPOST extends Omit<Student, 'id' | 'address'> {
  addressId: string;
}

export function toStudentPOST(s: Student): StudentPOST {
  return {
    ...s,
    addressId: s.address.id,
  };
}
