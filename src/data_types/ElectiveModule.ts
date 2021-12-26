import {CourseModule, CourseModuleFieldLabel} from './CourseModule';

export interface ElectiveModule extends CourseModule {
  deptName: string;
}

export const ElectiveModuleFieldLabel: Record<keyof ElectiveModule, string> = {
  deptName: 'deptName',
  ...CourseModuleFieldLabel,
};
