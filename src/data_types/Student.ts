import {Address} from './Address';
import {Gender} from './Gender';

export interface Student {
  id: string;
  name: string;
  gender: Gender;
  dob: Date;
  email: string;
  address: Address;
}

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
