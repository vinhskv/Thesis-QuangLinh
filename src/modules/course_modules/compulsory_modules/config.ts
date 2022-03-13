import {IJDAFormConfig} from '../../../base/controllers/jda_form_controllers/withFormController';
import {IJDAModuleConfig} from '../../../base/controllers/jda_module_controller/withModuleController';
import {IJDAListConfig} from '../../../base/creators/createListComponents';
import {CompulsoryModule} from '../../../data_types/CompulsoryModule';
import {CourseModuleFormConfig, CourseModuleModuleConfig} from '../config';

export const CompulsoryModuleModuleConfig: IJDAModuleConfig<CompulsoryModule> =
  {
    primaryKey: 'id',
    apiResource: 'course-modules',
    moduleName: 'Course Module',
    fieldLabel: {
      ...CourseModuleModuleConfig.fieldLabel,
    },
    quickRender: v => (v ? `${v.name}` : ''),
  };

export const CompulsoryModuleFormConfig: IJDAFormConfig<CompulsoryModule> = {
  ...CourseModuleFormConfig,
};

export const CompulsoryModuleListConfig: IJDAListConfig<CompulsoryModule> = {
  listItemProps: {
    icon: 'book-open-outline',
    title: course => `${course.name}`,
  },
  listProps: {},
};
