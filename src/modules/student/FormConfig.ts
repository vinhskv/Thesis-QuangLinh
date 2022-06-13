import { IJDAFormConfig } from "../../base/controllers/jda_form_controllers/withFormController";
import {Student} from '../../data_types/Student';

import {
  FormStringInput,
  FormGenderInput,
  FormDateInput,
} from '../FormInputs';

import { FormAddressInput } from "../address/Input";
import { FormStudentClassInput } from "../studentclass/Input";
import { FormMultiEnrolmentInput } from "../enrolment/Input";

export const StudentFormConfig: IJDAFormConfig<Student> = {
  id: FormStringInput,
  name: FormStringInput,
  gender: FormGenderInput,
  dob: FormDateInput,
  address: FormAddressInput,
  email: FormStringInput,
  studentClass: FormStudentClassInput,
  enrolments: FormMultiEnrolmentInput,
};