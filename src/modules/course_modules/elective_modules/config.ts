import {JDAFormConfig} from '../../../base/controllers/jda_form_controllers/withFormController';
import {ModuleConfig} from '../../../base/controllers/jda_module_controller';
import {IElectiveModule} from '../../../data_types/ElectiveModule';
import {FormStringInput} from '../../FormInputs';
import {CourseModuleFormConfig, CourseModuleModuleConfig} from '../config';

export const ElectiveModuleModuleConfig: ModuleConfig<IElectiveModule> = {
  primaryKey: 'id',
  apiResource: 'course-modules',
  moduleName: 'Course Module',
  fieldLabel: {
    ...CourseModuleModuleConfig.fieldLabel,
    deptName: 'Dept name',
  },
  quickRender: v => (v ? `${v.name}` : ''),
};

export const ElectiveModuleFormConfig: JDAFormConfig<IElectiveModule> = {
  ...CourseModuleFormConfig,
  deptName: FormStringInput,
};
