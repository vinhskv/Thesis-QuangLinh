import {IJDAFormConfig} from '../../../base/controllers/jda_form_controllers/withFormController';
import {IJDAModuleConfig} from '../../../base/controllers/jda_module_controller/withModuleController';
import {IJDAListConfig} from '../../../base/creators/createListComponents';
import {ElectiveModule} from '../../../data_types/ElectiveModule';
import {FormStringInput} from '../../FormInputs';
import {CourseModuleFormConfig, CourseModuleModuleConfig} from '../config';

export const ElectiveModuleModuleConfig: IJDAModuleConfig<ElectiveModule> = {
  primaryKey: 'id',
  apiResource: 'course-modules',
  moduleName: 'Course Module',
  fieldLabel: {
    ...CourseModuleModuleConfig.fieldLabel,
    deptName: 'Dept name',
  },
  quickRender: v => (v ? `${v.name}` : ''),
};

export const ElectiveModuleFormConfig: IJDAFormConfig<ElectiveModule> = {
  ...CourseModuleFormConfig,
  deptName: FormStringInput,
};

export const ElectiveModuleListConfig: IJDAListConfig<ElectiveModule> = {
  listItemProps: {
    icon: 'book-open-outline',
    title: course => `${course.name}`,
  },
  listProps: {},
};
