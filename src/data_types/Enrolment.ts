import {CourseModule} from './CourseModule';
import {Student} from './Student';

export interface Enrolment {
  id: number;
  student?: Student;
  courseModule?: CourseModule;
  internalMark: number;
  examMark: number;
  finalGrade: string;
}
