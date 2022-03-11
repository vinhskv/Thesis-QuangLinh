import {ModuleConfig} from '../../base/controllers/jda_module_controller';
import {CourseModule} from '../../data_types/CourseModule/CourseModule';

export const CourseModuleModuleConfig: ModuleConfig<CourseModule> = {
  primaryKey: 'id',
  apiResource: 'course-modules',
  moduleName: 'Course Module',
  fieldLabel: {
    id: 'ID',
    code: 'Code',
    name: 'Name',
    semester: 'Semester',
    credits: 'Credits',
  },
};
