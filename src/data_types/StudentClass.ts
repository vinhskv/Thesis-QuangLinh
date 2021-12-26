import {Student} from './Student';

export interface StudentClass {
  id: number;
  name: string;
  students: Student[];
}

export const StudentClass: Record<keyof StudentClass, string> = {
  id: 'ID',
  name: 'Name',
  students: 'Students',
};
