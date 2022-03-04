import {Student} from './Student';

export interface StudentClass {
  id: number;
  name: string;
  students: Student[];
}
export const StudentClassPrimaryKey: keyof StudentClass = 'id';
export const StudentClassApiResource: string = 'student-classes';
export const StudentClassModuleName: string = 'Student - Class';

export const StudentClassFieldLabel: Record<keyof StudentClass, string> = {
  id: 'ID',
  name: 'Name',
  students: 'Students',
};
