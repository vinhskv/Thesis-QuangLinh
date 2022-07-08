import {IJDAFormConfig} from '../../base/controllers/jda_form_controllers/withFormController';
import {CourseModule} from '../../data_types/CourseModule';

import {FormNumberInput, FormStringInput} from '../FormInputs';

export const CourseModuleFormConfig: IJDAFormConfig<CourseModule> = {
  id: {
    component: FormNumberInput,
    options: {rules: {maxLength: 3}, disabled: true},
  },
  code: {
    component: FormStringInput,
    options: {rules: {maxLength: 12}},
  },
  name: {
    component: FormStringInput,
    options: {rules: {required: true, maxLength: 30}},
  },
  semester: {
    component: FormNumberInput,
    options: {rules: {required: true, min: 1.0, maxLength: 2}},
  },
  credits: {
    component: FormNumberInput,
    options: {rules: {required: true, min: 1.0, maxLength: 2}},
  },
};
