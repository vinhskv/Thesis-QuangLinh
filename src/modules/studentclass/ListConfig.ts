import { IJDAListConfig } from "../../base/creators/createListComponents";
import { StudentClass } from "../../data_types/StudentClass";
export const StudentClassListConfig: IJDAListConfig<StudentClass> = {
  listItemProps: {
    icon: 'person-outline',
    title: studentclass => ` ${studentclass.id} | ${studentclass.name} |`,
  },
  listProps: {},
};