import {JDAFormConfig} from '../../../base/controllers/jda_form_controllers/withFormController';
import {ModuleConfig} from '../../../base/controllers/jda_module_controller';
import {ICompulsoryModule} from '../../../data_types/CompulsoryModule';
import {CourseModuleFormConfig, CourseModuleModuleConfig} from '../config';

export const CompulsoryModuleModuleConfig: ModuleConfig<ICompulsoryModule> = {
  primaryKey: 'id',
  apiResource: 'course-modules',
  moduleName: 'Course Module',
  fieldLabel: {
    ...CourseModuleModuleConfig.fieldLabel,
  },
  quickRender: v => (v ? `${v.name}` : ''),
};

export const CompulsoryModuleFormConfig: JDAFormConfig<ICompulsoryModule> = {
  ...CourseModuleFormConfig,
};
