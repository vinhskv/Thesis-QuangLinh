import {IJDAFormConfig} from '../../base/controllers/jda_form_controllers/withFormController';
import {IJDAModuleConfig} from '../../base/controllers/jda_module_controller/withModuleController';
import {IJDAListConfig} from '../../base/creators/createListComponents';
import {StudentClass} from '../../data_types/StudentClass';
import {
    FormNumberInput,
    FormStringInput,
    FormMultiStudentInput,
} from '../FormInputs';

export const StudentClassModuleConfig: IJDAModuleConfig<StudentClass> = {
  primaryKey: 'id',
  apiResource: 'student-classes',
  moduleName: 'Student Classes',
  fieldLabel: {
    id: 'Id',
    name: 'Name',
    students: 'Students',
  },
  quickRender: studentclass => (studentclass ? ` ${ studentclass.name } |` : ''),
  apiConfig:{
      toPOST:(studentclass)=>{
        return {
          ...studentclass,
        }
      }
  }
};

export const StudentClassFormConfig: IJDAFormConfig<StudentClass> = {
  id: FormNumberInput,
  name: FormStringInput,
  students: FormMultiStudentInput,
};

export const StudentClassListConfig: IJDAListConfig<StudentClass> = {
  listItemProps: {
    icon: 'person-outline',
    title: studentclass => ` ${ studentclass.id } | ${ studentclass.name } |`,
  },
  listProps: {},
};