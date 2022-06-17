import {SubStudent} from './Student';

export interface Address {
  id: number;
  name: string;
  student?: SubStudent;
}

export interface SubAddress extends Omit<Address, 'student'> {
  studentID?: string;
}
