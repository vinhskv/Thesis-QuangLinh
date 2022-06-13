import {IJDAModuleConfig} from '../../base/controllers/jda_module_controller/withModuleController';
import {StudentClass, SubStudentClass} from '../../data_types/StudentClass';

export const StudentClassModuleConfig: IJDAModuleConfig<StudentClass, SubStudentClass> = {
  primaryKey: 'id',
  apiResource: 'student-classes',
  moduleName: 'Student Classes',
  fieldLabel: {
    id: 'Id',
    name: 'Name',
    students: 'Students',
  },
  quickRender: studentclass => (studentclass ? ` ${studentclass.name} |` : ''),
  apiConfig: {
    toPOST: studentclass => {
      return {
        ...studentclass,
      };
    },
  },
};