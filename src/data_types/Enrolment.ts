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
export const EnrolmentKeyField: keyof Enrolment = 'id';
export const EnrolmentResource: string = 'enrolments';
export const EnrolmentFieldLabel: Record<keyof Enrolment, string> = {
  id: 'ID',
  student: 'Student',
  courseModule: 'Course module',
  internalMark: 'Internal mark',
  examMark: 'Exam mark',
  finalGrade: 'Final grade',
};
