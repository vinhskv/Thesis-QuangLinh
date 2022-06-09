import { Gender } from "./Gender"
import { Address } from "./Address"
import { StudentClass } from "./StudentClass"
import { Enrolment } from "./Enrolment"

export interface Student {
  id: string;
  name: string;
  gender: Gender;
  dob: Date;
  address?: Address;
  email: string;
  studentClass?: StudentClass;
  enrolments: Enrolment[];
}