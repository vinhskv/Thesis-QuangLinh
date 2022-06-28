import {Gender} from './enums/Gender';

import {Address, SubAddress} from './Address';
import {StudentClass, SubStudentClass} from './StudentClass';
import {SubEnrolment} from './Enrolment';

export interface Student {
  id: string;
  name: string;
  gender: Gender;
  dob: Date;
  address?: Omit<Address, 'student'>;
  email: string;
  studentClass?: Omit<StudentClass,'students'>;
  enrolments: SubEnrolment[];
}

export interface SubStudent
  extends Omit<Student, 'address' | 'studentClass' | 'enrolments'> {
  addressID?: number;
  studentClassID?: number;
  enrolmentsID: number[];
}
