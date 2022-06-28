import {Student} from './Student';

export interface StudentClass {
  id?: number;
  name: string;
  students?: Omit<Student, 'studentClass'>[];
}

export interface SubStudentClass extends Omit<StudentClass, 'students'> {
  studentsID?: string[];
}
