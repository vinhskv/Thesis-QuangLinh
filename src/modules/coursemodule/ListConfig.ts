import { IJDAListConfig } from "../../base/creators/createListComponents";
import { CourseModule } from "../../data_types/CourseModule";
export const CourseModuleListConfig: IJDAListConfig<CourseModule> = {
  listItemProps: {
    icon: 'person-outline',
    title: coursemodule => ` ${coursemodule.id} | ${coursemodule.code} | ${coursemodule.name} | ${coursemodule.semester} | ${coursemodule.credits} |`,
  },
  listProps: {},
};