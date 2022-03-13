import {Address} from './Address';

export enum Gender {
  Male = 'Male',
  Female = 'Female',
}

export interface Student {
  id: number;
  name: string;
  gender: Gender;
  dob: Date;
  email: string;
  address?: Address;
}

export interface StudentPOST extends Omit<Student, 'id' | 'address'> {
  addressId?: number;
}

export function toStudentPOST(s: Student): StudentPOST {
  return {
    ...s,
    addressId: s.address?.id,
  };
}
