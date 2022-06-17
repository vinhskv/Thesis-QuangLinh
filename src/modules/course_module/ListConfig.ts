import {IJDAListConfig} from '../../base/creators/createListComponents';
import {CourseModule} from '../../data_types/CourseModule';
export const CourseModuleListConfig: IJDAListConfig<CourseModule> = {
  listItemProps: {
    icon: 'person-outline',
    title: course_module =>
      ` ${course_module.id} | ${course_module.code} | ${course_module.name} | ${course_module.semester} | ${course_module.credits} |`,
  },
  listProps: {},
};
