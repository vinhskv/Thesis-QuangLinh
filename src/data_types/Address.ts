import {Student} from './Student';

export interface Address {
  id: number;
  name: string;
  student?: Omit<Student, 'address'>;
}

export interface SubAddress extends Omit<Address, 'student'> {
  studentID?: string;
}
