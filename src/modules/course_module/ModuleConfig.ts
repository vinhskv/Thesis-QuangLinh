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
  quickRender: course_module => (course_module ? ` ${course_module.id} | ${course_module.code} | ${course_module.name} | ${course_module.semester} | ${course_module.credits} |` : ''),
  apiConfig: {
    toPOST: course_module => {
      return {
        ...course_module,
      };
    },
  },
};
