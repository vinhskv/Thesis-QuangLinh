import {SubStudent} from './Student';

export interface StudentClass {
  id?: number;
  name: string;
  students?: SubStudent[];
}

export interface SubStudentClass extends Omit<StudentClass, 'students'> {
  studentsID?: string[];
}
