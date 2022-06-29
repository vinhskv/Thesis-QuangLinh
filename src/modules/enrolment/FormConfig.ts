import {IJDAFormConfig} from '../../base/controllers/jda_form_controllers/withFormController';
import {Enrolment} from '../../data_types/Enrolment';

import {FormNumberInput, FormStringInput} from '../FormInputs';

import {FormStudentInput} from '../student/Input';
import {FormCourseModuleInput} from '../course_module/Input';

export const EnrolmentFormConfig: IJDAFormConfig<Enrolment> = {
  id: {
    component: FormNumberInput,
    options: {rules: {maxLength: 5}},
  },
  student: {
    component: FormStudentInput,
    options: {rules: {required: true, maxLength: 5}},
  },
  courseModule: {
    component: FormCourseModuleInput,
    options: {rules: {required: true, maxLength: 5}},
  },
  internalMark: {
    component: FormNumberInput,
    options: {rules: {min: 0.0, maxLength: 4}},
  },
  examMark: {
    component: FormNumberInput,
    options: {rules: {min: 0.0, maxLength: 4}},
  },
  finalGrade: {
    component: FormStringInput,
    options: {rules: {maxLength: 1}},
  },
  finalMark: {
    component: FormNumberInput,
  },
};
