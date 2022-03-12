import {IStudent} from './Student';

export interface IStudentClass {
  id: number;
  name: string;
  students: IStudent[];
}
