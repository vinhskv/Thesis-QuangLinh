export interface CourseModule {
  id: number;
  code: string;
  name: string;
  semester: number;
  credits: number;
}
export const CourseModulePrimaryKey: keyof CourseModule = 'id';
export const CourseModuleApiResource: string = 'course-modules';
export const CourseModuleModuleName: string = 'Course Module';

export const CourseModuleFieldLabel: Record<keyof CourseModule, string> = {
  id: 'ID',
  code: 'Code',
  name: 'Name',
  semester: 'Semester',
  credits: 'Credits',
};