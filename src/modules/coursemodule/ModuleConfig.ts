import {IJDAModuleConfig} from '../../base/controllers/jda_module_controller/withModuleController';
import {CourseModule} from '../../data_types/CourseModule';

export const CourseModuleModuleConfig: IJDAModuleConfig<CourseModule> = {
  primaryKey: 'id',
  apiResource: 'course-modules',
  moduleName: 'Course Modules',
  fieldLabel: {
    id: 'Id',
    code: 'Code',
    name: 'Name',
    semester: 'Semester',
    credits: 'Credits',
  },
  quickRender: coursemodule => (coursemodule ? ` ${coursemodule.id} | ${coursemodule.code} | ${coursemodule.name} | ${coursemodule.semester} | ${coursemodule.credits} |` : ''),
  apiConfig: {
    toPOST: coursemodule => {
      return {
        ...coursemodule,
      };
    },
  },
};