import {ICourseModule} from './CourseModule';
import {IStudent} from './Student';

export interface IEnrolment {
  id: number;
  student?: IStudent;
  courseModule?: ICourseModule;
  internalMark: number;
  examMark: number;
  finalGrade: string;
}
