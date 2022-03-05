import {CourseModule, CourseModuleFieldLabel} from './CourseModule';

export interface ElectiveModule extends CourseModule {
  deptName: string;
}
export const ElectiveModulePrimaryKey: keyof ElectiveModule = 'id';
export const ElectiveModuleApiResource: string = 'course-modules';
export const ElectiveModuleModuleName: string = 'Elective Module';

export const ElectiveModuleFieldLabel: Record<keyof ElectiveModule, string> = {
  deptName: 'Dept name',
  ...CourseModuleFieldLabel,
};
