import {JDAFormConfig} from '../../../base/controllers/jda_form_controllers/withFormController';
import {ModuleConfig} from '../../../base/controllers/jda_module_controller';
import {CompulsoryModule} from '../../../data_types/CourseModule/CompulsoryModule';
import {CourseModuleFormConfig, CourseModuleModuleConfig} from '../config';

export const CompulsoryModuleModuleConfig: ModuleConfig<CompulsoryModule> = {
  primaryKey: 'id',
  apiResource: 'course-modules',
  moduleName: 'Course Module',
  fieldLabel: {
    ...CourseModuleModuleConfig.fieldLabel,
  },
  quickRender: v => (v ? `${v.name}` : ''),
};

export const CompulsoryModuleFormConfig: JDAFormConfig<CompulsoryModule> = {
  ...CourseModuleFormConfig,
};
