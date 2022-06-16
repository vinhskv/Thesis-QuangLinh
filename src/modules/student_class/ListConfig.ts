import { IJDAListConfig } from "../../base/creators/createListComponents";
import { StudentClass } from "../../data_types/StudentClass";
export const StudentClassListConfig: IJDAListConfig<StudentClass> = {
  listItemProps: {
    icon: 'person-outline',
    title: student_class => ` ${student_class.id} | ${student_class.name} |`,
  },
  listProps: {},
};