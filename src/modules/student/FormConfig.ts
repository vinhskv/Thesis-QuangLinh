import {IJDAFormConfig} from '../../base/controllers/jda_form_controllers/withFormController';
import {Modules} from '../../data_types/enums/Modules';
import {Student} from '../../data_types/Student';

import {FormDateInput, FormGenderInput, FormStringInput} from '../FormInputs';

import {FormAddressInput} from '../address/Input';
import {FormMultiEnrolmentInput} from '../enrolment/Input';
import {FormStudentClassInput} from '../student_class/Input';

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
    options: {rules: {maxLength: 20}, module: Modules.Address},
  },
  email: {
    component: FormStringInput,
    options: {rules: {required: true, maxLength: 30}},
  },
  studentClass: {
    component: FormStudentClassInput,
    options: {rules: {maxLength: 6}, module: Modules.StudentClass},
  },
  enrolments: {
    component: FormMultiEnrolmentInput,
    options: {rules: {required: true}, module: Modules.Enrolment},
  },
};
