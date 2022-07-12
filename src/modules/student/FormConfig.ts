import {
  IJDAFormConfig,
  JDAFormMode,
} from '../../base/controllers/jda_form_controllers/withFormController';
import {Modules} from '../../data_types/enums/Modules';
import {Student} from '../../data_types/Student';

import {FormDateInput, FormGenderInput, FormStringInput} from '../FormInputs';

import {FormAddressInput} from '../address/Input';
import {FormMultiEnrolmentInput} from '../enrolment/Input';
import {FormStudentClassInput} from '../student_class/Input';

export const StudentFormConfig: IJDAFormConfig<Student> = {
  id: {
    component: FormStringInput,
    options: {disabled: true, rules: {maxLength: 6}},
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
    options: {module: Modules.Address, rules: {maxLength: 20}},
  },
  email: {
    component: FormStringInput,
    options: {rules: {required: true, maxLength: 30}},
  },
  studentClass: {
    component: FormStudentClassInput,
    options: {module: Modules.StudentClass, rules: {maxLength: 6}},
  },
  enrolments: {
    component: FormMultiEnrolmentInput,
    options: {
      module: Modules.Enrolment,
      rules: {required: true},
      hideInMode: [JDAFormMode.CREATE],
    },
  },
};
