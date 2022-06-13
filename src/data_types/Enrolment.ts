
import {SubStudent} from './Student';
import {CourseModule} from './CourseModule';

export interface Enrolment {
  id: number;
  student: SubStudent;
  courseModule: CourseModule;
  internalMark?: number;
  examMark?: number;
  finalGrade?: string;
  finalMark?: number;
}

export interface SubEnrolment extends Omit<Enrolment,| 'student' | 'courseModule' > {
  studentID: string;
  courseModuleID: number;
}
