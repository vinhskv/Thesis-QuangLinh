export interface CourseModule {
  id: number;
  code: string;
  name: string;
  semester: number;
  credits: number;
}
export const CourseModuleKeyField: keyof CourseModule = 'id';

export const CourseModuleFieldLabel: Record<keyof CourseModule, string> = {
  id: 'ID',
  code: 'Code',
  name: 'Name',
  semester: 'Semester',
  credits: 'Credits',
};
