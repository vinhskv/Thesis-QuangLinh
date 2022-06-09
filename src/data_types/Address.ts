import { Student } from "./Student"

export interface Address {
  id: number;
  name: string;
  student?: Student;
}