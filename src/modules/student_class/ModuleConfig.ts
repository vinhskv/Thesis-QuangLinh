import {IJDAModuleConfig} from '../../base/controllers/jda_module_controller/withModuleController';
import { Modules } from '../../data_types/enums/Modules';
import {StudentClass, SubStudentClass} from '../../data_types/StudentClass';

export const StudentClassModuleConfig: IJDAModuleConfig<StudentClass, SubStudentClass> = {
  primaryKey: 'id',
  route: Modules.StudentClass,
  apiResource: 'student-classes',
  moduleName: 'Student Classes',
  fieldLabel: {
    id: 'Id',
    name: 'Name',
    students: 'Students',
  },
  quickRender: student_class => (student_class ? ` ${student_class.name} |` : ''),
  apiConfig: {
    toPOST: student_class => {
      return {
        ...student_class,
      };
    },
  },
};
