import {Student} from './Student';

export interface StudentClass {
  id: number;
  name: string;
  students: Student[];
}
export const StudentClassKeyField: keyof StudentClass = 'id';

export const StudentClassFieldLabel: Record<keyof StudentClass, string> = {
  id: 'ID',
  name: 'Name',
  students: 'Students',
};
