import {CourseModule} from './CourseModule';
import {Student} from './Student';

export interface Enrolment {
  id: number;
  student: Student;
  courseModule: CourseModule;
  internalMark: number;
  examMark: number;
  finalGrade: string;
}

export const EnrolmentFieldLabel: Record<keyof Enrolment, string> = {
  id: 'ID',
  student: 'Student',
  courseModule: 'courseModule',
  internalMark: 'internalMark',
  examMark: 'examMark',
  finalGrade: 'finalGrade',
};
