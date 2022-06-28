import {CourseModuleType} from './enums/CourseModuleType';

export interface CourseModule {
  id: number;
  type: CourseModuleType;
  code: string;
  name: string;
  semester: number;
  credits: number;
}
