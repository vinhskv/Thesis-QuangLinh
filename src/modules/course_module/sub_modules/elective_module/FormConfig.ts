import {IJDAFormConfig} from '../../../../base/controllers/jda_form_controllers/withFormController';
import {ElectiveModule} from '../../../../data_types/ElectiveModule';
import {FormStringInput} from '../../../FormInputs';
import {CourseModuleFormConfig} from '../../FormConfig';

export const ElectiveModuleFormConfig: IJDAFormConfig<ElectiveModule> = {
  ...CourseModuleFormConfig,
  deptName: {
    component: FormStringInput,
    options: {
      rules: {
        required: true,
        maxLength: 50,
      },
    },
  },
};
