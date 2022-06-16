import {IJDAFormConfig} from '../../base/controllers/jda_form_controllers/withFormController';
import {CourseModule} from '../../data_types/CourseModule';
import {ITypedFormItem} from '../../base/controllers/jda_form_controllers/withTypedFormController';
import {CourseModuleType} from '../../data_types/enums/CourseModuleType';
import {CompulsoryModuleForm} from './sub_modules/compulsory_module/Index';
import {ElectiveModuleForm} from './sub_modules/elective_module/Index';

import {FormNumberInput, FormStringInput} from '../FormInputs';

export const CourseModuleFormConfig: IJDAFormConfig<CourseModule> = {
  id: FormNumberInput,
  code: FormStringInput,
  name: FormStringInput,
  semester: FormNumberInput,
  credits: FormNumberInput,
};
