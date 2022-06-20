import { IJDAFormConfig } from "../../base/controllers/jda_form_controllers/withFormController";
import {CourseModule} from '../../data_types/CourseModule';

import {
  FormNumberInput,
  FormStringInput,
} from '../FormInputs';

export const CourseModuleFormConfig: IJDAFormConfig<CourseModule> = {
  id: FormNumberInput,
  code: FormStringInput,
  name: FormStringInput,
  semester: FormNumberInput,
  credits: FormNumberInput,
};

