import {IJDAFormConfig} from '../../base/controllers/jda_form_controllers/withFormController';
import {CourseModule} from '../../data_types/CourseModule';

import {FormNumberInput, FormStringInput} from '../FormInputs';

export const CourseModuleFormConfig: IJDAFormConfig<CourseModule> = {
  id: {component: FormNumberInput},
  code: {component: FormStringInput},
  name: {component: FormStringInput},
  semester: {component: FormNumberInput},
  credits: {component: FormNumberInput},
};
