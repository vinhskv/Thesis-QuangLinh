import {IStudent} from './Student';

export interface IAddress {
  id: number;
  name: string;
  student?: IStudent;
}

export class Address implements IAddress {
  constructor(
    public id: number,
    public name: string,
    public student?: IStudent,
  ) {}
}
