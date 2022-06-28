import {IJDAFormConfig} from '../../base/controllers/jda_form_controllers/withFormController';
import {Student} from '../../data_types/Student';

import {FormStringInput, FormGenderInput, FormDateInput} from '../FormInputs';

import {FormAddressInput} from '../address/Input';
import {FormStudentClassInput} from '../student_class/Input';
import {FormMultiEnrolmentInput} from '../enrolment/Input';

export const StudentFormConfig: IJDAFormConfig<Student> = {
  id: {
    component: FormStringInput,
    options: {rules: {maxLength: 6}},
  },
  name: {
    component: FormStringInput,
    options: {rules: {required: true, maxLength: 30}},
  },
  gender: {
    component: FormGenderInput,
    options: {rules: {required: true, maxLength: 10}},
  },
  dob: {
    component: FormDateInput,
    options: {rules: {required: true, maxLength: 15}},
  },
  address: {
    component: FormAddressInput,
    options: {rules: {maxLength: 20}},
  },
  email: {
    component: FormStringInput,
    options: {rules: {required: true, maxLength: 30, pattern: RegExp('.*@.*')}},
  },
  studentClass: {
    component: FormStudentClassInput,
    options: {rules: {maxLength: 6}},
  },
  enrolments: {
    component: FormMultiEnrolmentInput,
    options: {rules: {required: true}},
  },
};
