import {IJDAFormConfig} from '../../base/controllers/jda_form_controllers/withFormController';
import {Student} from '../../data_types/Student';

import {FormStringInput, FormGenderInput, FormDateInput} from '../FormInputs';

import {FormAddressInput} from '../address/Input';
import {FormStudentClassInput} from '../student_class/Input';
import {FormMultiEnrolmentInput} from '../enrolment/Input';

export const StudentFormConfig: IJDAFormConfig<Student> = {
  id: {component: FormStringInput},
  name: {component: FormStringInput},
  gender: {component: FormGenderInput},
  dob: {component: FormDateInput},
  address: {component: FormAddressInput},
  email: {component: FormStringInput},
  studentClass: {component: FormStudentClassInput},
  enrolments: {component: FormMultiEnrolmentInput},
};
