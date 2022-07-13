import {Gender} from './enums/Gender';

import {SubAddress} from './Address';
import {SubEnrolment} from './Enrolment';
import {SubStudentClass} from './StudentClass';

export interface Student {
  id: string;
  name: string;
  gender: Gender;
  dob: Date;
  address?: SubAddress;
  email: string;
  studentClass?: SubStudentClass;
  enrolments: SubEnrolment[];
}

export interface SubStudent
  extends Omit<Student, 'address' | 'studentClass' | 'enrolments'> {
  addressID?: number;
  studentClassID?: number;
  enrolmentsID: number[];
}
