import {JDAFormConfig} from '../../../base/controllers/jda_form_controllers/withFormController';
import {ModuleConfig} from '../../../base/controllers/jda_module_controller';
import {ElectiveModule} from '../../../data_types/CourseModule/ElectiveModule';
import {FormStringInput} from '../../FormInputs';
import {CourseModuleFormConfig, CourseModuleModuleConfig} from '../config';

export const ElectiveModuleModuleConfig: ModuleConfig<ElectiveModule> = {
  primaryKey: 'id',
  apiResource: 'course-modules',
  moduleName: 'Course Module',
  fieldLabel: {
    ...CourseModuleModuleConfig.fieldLabel,
    deptName: 'Dept name',
  },
  quickRender: v => (v ? `${v.name}` : ''),
};

export const ElectiveModuleFormConfig: JDAFormConfig<ElectiveModule> = {
  ...CourseModuleFormConfig,
  deptName: FormStringInput,
};
