import {IAddress} from './Address';

export enum Gender {
  Male = 'Male',
  Female = 'Female',
}

export interface IStudent {
  id: number;
  name: string;
  gender: Gender;
  dob: Date;
  email: string;
  address?: IAddress;
}
export interface StudentPOST extends Omit<IStudent, 'id' | 'address'> {
  addressId?: number;
}

export function toStudentPOST(s: IStudent): StudentPOST {
  return {
    ...s,
    addressId: s.address?.id,
  };
}
